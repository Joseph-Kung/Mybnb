json.extract! @listing, :id, :owner_id, :title, :address, :city, :state, :zip_code, :latitude, :longitude, :num_rooms, :num_bathrooms, :price, :description, :house, 
                        :private_room, :heater, :pool, :parking, :tv, :wifi, :air_con, :kitchen, :num_guests, :num_beds

if @listing.photos.attached?
  json.photoUrls @listing.photos.map { |file| url_for(file)}
end

if @listing.owner.photo.attached?
  json.userPhoto url_for(@listing.owner.photo)
end

json.userName "#{@listing.owner.first_name} #{@listing.owner.last_name}"