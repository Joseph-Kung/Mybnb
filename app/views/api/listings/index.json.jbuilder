@listings.each do |listing|
  json.set! listing.id do 
    json.extract! listing, :id, :title, :city, :house, :private_room, :price
  end
end