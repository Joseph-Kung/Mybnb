class Booking < ApplicationRecord
  validates :num_guests, :start_date, :end_date, presence: true

  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing
  
  belongs_to :renter,
    foreign_key: :renter_id,
    class_name: :User

  def valid_dates?
    if self.start_date && self.end_date
      current_requests = Booking
        .where(listing_id: self.listing_id)
        .where.not('end_date <= ? OR start_date >= ?', self.start_date, self.end_date)
      return true if current_requests.empty?
    end
    return false
  end
end
