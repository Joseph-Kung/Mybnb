class Listing < ApplicationRecord
  validates :title, :city, :state, :zip_code, :latitude, :longitude, :num_rooms, :num_bathrooms, presence: true
  validates :price, :description, :private_room, :house, :washer, :dryer, :parking, :tv, :wifi, :air_con, :kitchen, presence: true
  validates :address, presence: true, uniqueness: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
end
