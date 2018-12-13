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
  num_guests: 2,
  num_rooms: 1,
  num_beds: 2,
  num_bathrooms: 1,
  price: 300,
  description: 'Small home in sunset. Awesome location!',
  private_room: true,
  house: true,
  heater: false,
  pool: false,
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
  num_guests: 5,
  num_rooms: 4,
  num_beds: 5,
  num_bathrooms: 2,
  price: 300,
  description: 'Super awesome home in the Richmond distrcit! Perfect for a small family looking for a getaway in SF for the weekend.',
  private_room: false,
  house: true,
  heater: true,
  pool: false,
  parking: true,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: true
})

Listing.create!({
  owner_id: 1,
  title: 'Bay area home ready for the weekend',
  address: '735 100th Ave',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94122,
  latitude: 40.7799262,
  longitude: -122.4772172,
  num_guests: 2,
  num_rooms: 1,
  num_beds: 2,
  num_bathrooms: 1,
  price: 100,
  description: 'Rent my house! it is awesome trust me',
  private_room: false,
  house: true,
  heater: false,
  pool: false,
  parking: true,
  tv: true,
  wifi: true,
  air_con: false,
  kitchen: true
})

Listing.create!({
  owner_id: 1,
  title: 'New construction with large pool.',
  address: '816 144th Ave',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94122,
  latitude: 40.7799262,
  longitude: -121.4772172,
  num_guests: 3,
  num_rooms: 2,
  num_beds: 3,
  num_bathrooms: 2,
  price: 312,
  description: 'Medium sized home in safe neighborhood. Large pools perfect for pool parties. No smoking.',
  private_room: false,
  house: true,
  heater: true,
  pool: true,
  parking: true,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: true
})

Listing.create!({
  owner_id: 1,
  title: 'Small apartment in prime location',
  address: '888 avenue',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94122,
  latitude: 35.7799262,
  longitude: -120.4772172,
  num_guests: 3,
  num_rooms: 2,
  num_beds: 2,
  num_bathrooms: 1,
  price: 312,
  description: 'Small apartment in the best part of the city. Please no dogs allowed.',
  private_room: false,
  house: true,
  heater: true,
  pool: false,
  parking: false,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: true
})