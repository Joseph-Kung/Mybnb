class Listing < ApplicationRecord
  validates :title, :city, :state, :zip_code, :latitude, :longitude, :num_rooms, :num_bathrooms, :price, :description, :num_beds, :num_guests, presence: true
  validates :private_room, :house, :pool, :heater, :parking, :tv, :wifi, :air_con, :kitchen, inclusion: [true, false]
  validates :address, presence: true, uniqueness: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :bookings,
    foreign_key: :listing_id,
    class_name: :Booking

  has_many_attached :photos
end
