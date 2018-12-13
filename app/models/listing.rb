class Listing < ApplicationRecord
  validates :title, :city, :state, :zip_code, :latitude, :longitude, :num_rooms, :num_bathrooms, :price, :description, :house, presence: true
  validates :private_room, :washer, :dryer, :parking, :tv, :wifi, :air_con, :kitchen, inclusion: [true, false]
  validates :address, presence: true, uniqueness: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
end
