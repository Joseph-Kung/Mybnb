class Review < ApplicationRecord
  validates :body, :num_stars

  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
