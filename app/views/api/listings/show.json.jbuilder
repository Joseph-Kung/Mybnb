json.extract! @listing, :id, :owner_id, :title, :address, :city, :state, :zip_code, :latitude, :longitude, :num_rooms, :num_bathrooms, :price, :description, :house, 
                        :private_room, :heater, :pool, :parking, :tv, :wifi, :air_con, :kitchen

json.photoUrls @listing.photos.map { |file| url_for(file)}