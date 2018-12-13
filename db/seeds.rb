# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User seed
User.create!({email: 'admin', first_name: 'admin', last_name: 'admin', password: 'password'})
User.create!({email: 'Guest', first_name: 'guest', last_name: 'guest', password: 'password'})


# Listing seed
Listing.create!({
  owner_id: 1,
  title: 'Awesome home in SF!',
  address: '1691 43rd Ave',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94122,
  latitude: 37.7624366,
  longitude: -122.5028618,
  num_rooms: 1,
  num_bathrooms: 1,
  price: 300,
  description: 'Small home in sunset. Awesome location!',
  private_room: true,
  house: true,
  washer: false,
  dryer: false,
  parking: true,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: true
})

Listing.create!({
  owner_id: 1,
  title: 'Perfect home in Richmond district',
  address: '735 18th Ave',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94121,
  latitude: 37.7799262,
  longitude: -122.4772172,
  num_rooms: 4,
  num_bathrooms: 2,
  price: 300,
  description: 'Super awesome home in the Richmond distrcit! Perfect for a small family looking for a getaway in SF for the weekend.',
  private_room: false,
  house: true,
  washer: true,
  dryer: false,
  parking: true,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: true
})