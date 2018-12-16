# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User seed
User.create!({email: 'admin', first_name: 'admin', last_name: 'admin', password: 'password'})
User.create!({email: 'stephencurry@gmail.com', first_name: 'Stephen', last_name: 'Curry', password: 'password'})
User.create!({email: 'Guest', first_name: 'guest', last_name: 'guest', password: 'password'})


# Listing seed
sf1 = Listing.create!({
  owner_id: 2,
  title: 'Awesome home in SF!',
  address: '1490 23rd Ave',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94122,
  latitude: 37.759870,
  longitude: -122.480860,
  num_guests: 3,
  num_rooms: 2,
  num_beds: 3,
  num_bathrooms: 2,
  price: 190,
  description: 'The guest apartment has its own entrance located on the ground level of our home. The private apartment is 720 sq and has 8 ft ceilings. The living room and kitchen are new and the bath and the two bedrooms are remodeled.

The apartment can sleep 4. The 2 bedrooms have garden view windows. One room with a queen size bed and the second bedroom with two twin size beds. All bed linens are provided.

The eat-in kitchen is equipped with:

(Please note that there is not a full sized built in oven and stovetop in the kitchen)

counter top toaster oven 
counter top large single burner induction hot plate
large microwave
full sized refrigerator 
washer/dryer 
electric tea kettle and electric coffee maker

Private bath has a large shower (two shower heads), cherrywood vanity/sink, and a large mirror. Towels and soap/shampoo are provided.

In the Living room area there is cable TV. Free WiFi is available throughout the apartment.

Guests are welcome to share the garden; there is a large deck with seating and a small table.

Neighborhood is the quiet Sunnyside district. The apartment is within 5 walk minutes of City College (CCSF). In our immediate neighborhood Whole Foods and Safeway supermarkets are within 5-15 walk minutes, 5 drive minutes and there are small cafes and eateries within the neighborhood.

Glen Park is 25 walk or 10 bus minutes away and has several small shops, local restaurants, a postal service, library and is the location of the Glen Park BART station.',
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

sf1pic1 = File.open('app/assets/images/sf1pic1.jpg')
sf1pic2 = File.open('app/assets/images/sf1pic2.jpg')
sf1pic3 = File.open('app/assets/images/sf1pic3.jpg')
sf1pic4 = File.open('app/assets/images/sf1pic4.jpg')
sf1pic5 = File.open('app/assets/images/sf1pic5.jpg')
sf1.photos.attach(io: sf1pic1, filename: 'sf1pic1.jpg')
sf1.photos.attach(io: sf1pic2, filename: 'sf1pic2.jpg')
sf1.photos.attach(io: sf1pic3, filename: 'sf1pic3.jpg')
sf1.photos.attach(io: sf1pic4, filename: 'sf1pic4.jpg')
sf1.photos.attach(io: sf1pic5, filename: 'sf1pic5.jpg')


Listing.create!({
  owner_id: 2,
  title: 'Perfect home in Richmond district',
  address: '4051 19th St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94114,
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

sf1pic1 = File.open('app/assets/images/sf1pic1.jpg')
sf1pic2 = File.open('app/assets/images/sf1pic2.jpg')
sf1pic3 = File.open('app/assets/images/sf1pic3.jpg')
sf1pic4 = File.open('app/assets/images/sf1pic4.jpg')
sf1pic5 = File.open('app/assets/images/sf1pic5.jpg')
sf1.photos.attach(io: sf1pic1, filename: 'sf1pic1.jpg')
sf1.photos.attach(io: sf1pic2, filename: 'sf1pic2.jpg')
sf1.photos.attach(io: sf1pic3, filename: 'sf1pic3.jpg')
sf1.photos.attach(io: sf1pic4, filename: 'sf1pic4.jpg')
sf1.photos.attach(io: sf1pic5, filename: 'sf1pic5.jpg')

Listing.create!({
  owner_id: 1,
  title: 'Great location and house.',
  address: '929 19th Ave',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94121,
  latitude: 40.7799262,
  longitude: -132.4772172,
  num_guests: 3,
  num_rooms: 3,
  num_beds: 2,
  num_bathrooms: 2,
  price: 500,
  description: 'Nice and warm home in SF. Lots of amenitites and things to keep you happy.',
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
  city: 'Los Angeles',
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
  address: '86 avenue',
  city: 'Los Angeles',
  state: 'CA',
  zip_code: 94122,
  latitude: 40.7799262,
  longitude: -120.4772172,
  num_guests: 4,
  num_rooms: 2,
  num_beds: 1,
  num_bathrooms: 5,
  price: 240,
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

Listing.create!({
  owner_id: 1,
  title: 'Nice and cozy house in LA',
  address: '88 Boulevard',
  city: 'Los Angeles',
  state: 'CA',
  zip_code: 94122,
  latitude: 39.7799262,
  longitude: -120.4772172,
  num_guests: 5,
  num_rooms: 3,
  num_beds: 5,
  num_bathrooms: 5,
  price: 414,
  description: 'Awesome location and amenities! Come check it out. Message me for more information.',
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

Listing.create!({
  owner_id: 1,
  title: 'Small apartment in prime location',
  address: '101 avenue',
  city: 'Los Angeles',
  state: 'CA',
  zip_code: 94122,
  latitude: 35.7799262,
  longitude: -111.4772172,
  num_guests: 3,
  num_rooms: 2,
  num_beds: 2,
  num_bathrooms: 1,
  price: 550,
  description: 'Nice little house in the suburbs! Check out the pictures.',
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