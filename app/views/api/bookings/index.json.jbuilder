@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :listing_id, :renter_id, :num_guests, :start_date, :end_date

    if booking.listing.photos.attached?
      json.listingPicture url_for(booking.listing.photos.first)
    end

    if booking.listing.owner.photo.attached?
      json.ownerPicture url_for(booking.listing.owner.photo)
    end

    json.listingCity booking.listing.city
    json.listingTitle booking.listing.title
    json.listingId booking.listing.id
  end
end