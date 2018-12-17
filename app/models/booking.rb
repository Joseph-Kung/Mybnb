class Booking < ApplicationRecord
  validates :num_guests, :start_date, :end_date, presence: true

  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing
  
  belongs_to :renter,
    foreign_key: :renter_id,
    class_name: :User
end
