@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :listing_id, :renter_id, :num_guests, :start_date, :end_date
  end
end