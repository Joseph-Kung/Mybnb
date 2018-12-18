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

  def in_bounds(bounds)
    bounds = bounds.values
    if self.latitude.between?(bounds[1]['lat'].to_f, bounds[0]['lat'].to_f) && self.longitude.between?(bounds[1]['lng'].to_f, bounds[0]['lng'].to_f)
      return true
    end

    return false
  end
end
