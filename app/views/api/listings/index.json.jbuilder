@listings.each do |listing|
  json.set! listing.id do 
    json.extract! listing, :id, :title, :city, :house, :private_room, :price

    if listing.photos.attached?
      json.photoUrl url_for(listing.photos.first)
    end
  end
end