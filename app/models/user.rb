class User < ApplicationRecord
  validates :email, :session_token, uniqueness: true, presence: true
  validates :password_digest, :first_name, :last_name, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  before_validation :ensure_session_token

  has_many :listings,
    foreign_key: :owner_id,
    class_name: :Listing

  has_many :bookings,
    foreign_key: :renter_id,
    class_name: :Booking

  has_one_attached :photo

  has_many :reviews,
    foreign_key: :user_id,
    class_name: :Review

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
end
