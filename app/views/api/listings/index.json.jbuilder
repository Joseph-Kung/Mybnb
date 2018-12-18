@listings.each do |listing|
  json.set! listing.id do 
    json.extract! listing, :id, :title, :city, :house, :private_room, :price, :latitude, :longitude

    if listing.photos.attached?
      json.photoUrls listing.photos.map { |file| url_for(file)}
    end
  end
end