# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User seed
User.create!({email: 'admin', first_name: 'admin', last_name: 'admin', password: 'password'})
steph = User.create!({email: 'steph', first_name: 'Stephen', last_name: 'Curry', password: 'password'})
steve = User.create!({email: 'steve', first_name: 'Steve', last_name: 'Kerr', password: 'password'})
kevin = User.create!({email: 'kevin', first_name: 'Kevin', last_name: 'Durant', password: 'password'})
klay = User.create!({email: 'klay', first_name: 'Klay', last_name: 'Thompson', password: 'password'})
dray = User.create!({email: 'dray', first_name: 'Draymond', last_name: 'Green', password: 'password'})
User.create!({email: 'Guest', first_name: 'guest', last_name: 'guest', password: 'password'})

PLAYERS = [steph, steve, kevin, klay, dray]

PLAYERS.each.with_index do |player|
    file = File.open("app/assets/images/seed/users/#{player.email}.jpg")
    player.photo.attach(io: file, filename: "#{player.email}.jpg")
end


# Listing seed
lst1 = Listing.create!({
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

Private bath has a large shower (two shower heads), cherrywood vanity/sink, and a large mirror. Towels and soap/shampoo are provided.

In the Living room area there is cable TV. Free WiFi is available throughout the apartment.

Guests are welcome to share the garden; there is a large deck with seating and a small table.

Neighborhood is the quiet Sunnyside district. The apartment is within 5 walk minutes of City College (CCSF). In our immediate neighborhood Whole Foods and Safeway supermarkets are within 5-15 walk minutes, 5 drive minutes and there are small cafes and eateries within the neighborhood.

Glen Park is 25 walk or 10 bus minutes away and has several small shops, local restaurants, a postal service, library and is the location of the Glen Park BART station.',
  private_room: false,
  house: true,
  heater: false,
  pool: false,
  parking: false,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: true
})

lst2 = Listing.create!({
  owner_id: 3,
  title: 'Perfect home in Richmond district',
  address: '4051 19th St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94114,
  latitude: 37.759140,
  longitude: -122.433880,
  num_guests: 4,
  num_rooms: 3,
  num_beds: 4,
  num_bathrooms: 3,
  price: 350,
  description: "1895 Victorian flat w/ 12 ft ceilings. (No Long Term Rentals or couples) Close to Mission, & 2.5 blocks from Castro theater. MUNI is 3 blocks away. Room is small and cosy, and great value for one of the most expensive neighborhoods in the US!

More information
The space

We live in an 1895 Victorian top flat with 12 foot ceilings on the best block in San Francisco. Our calendar is always up to date.

Location Location Location~ Our home is close to the Mission, Lower Haight, and 2.5 blocks from the Castro theater. The underground is 3 blocks away, with a street car even closer. The room is small and cosy, but a great price for one of the most expensive neighborhoods in the US!

Please fill out your profile if you are interested~and make sure to arrange a time to meet prior to your arrival, I lead a busy lifestyle, work full time, and wouldn't want to miss anyone! Check in is at 5 and we are 37 steps up from street level.

Restaurants are plentiful and beautiful Dolores Park is quite close. Your room has a twin day bed 75 inches long with a desk and a solid door. The room is 9.25 feet by 8 feet. Amenities include wireless and a gorgeous full kitchen. We have one cat that enjoys company almost as much as we do and a sweet rescue pooch. Our flat gets more light than any other home I've been to in my 13 years of living in this great town.

For all you foodies out there BiRite Creamery, Tartine, Delfina's Pizza and Proper are within 4.5 blocks of our front door. Michelin rated Range is just a few farther.

As much as we love bikes, and we do, we don't have space for storage. If you rent one please return it at the end of the day or lock up on the street at your own risk. Please ask if you would like to have a friend for a short visit.",
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

lst3 = Listing.create!({
  owner_id: 3,
  title: 'Spacious studio near Ocean Beach',
  address: '3236 Quintara St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94116,
  latitude: 37.747790,
  longitude: -122.500330,
  num_guests: 2,
  num_rooms: 1,
  num_beds: 2,
  num_bathrooms: 1,
  price: 120,
  description: "Come stay at our fully remodeled spacious studio/in-law, that opens onto mature garden, patio and BBQ. Granite countertops in kitchen and bathroom, hardwood floors, featuring live edge breakfast bar and lots of natural light. Bonus room, (walk through room) with futon that converts to queen bed. Seperate entrance from main house. Blocks from the famous Cliff House, Ocean beach and Golden Gate Park. Bus stops outside studio and will take you to downtown S.F. We have a queen bed and additional single futon in main studio area, and a queen futon in the bonus room. Both rooms have plenty of built in closet space. The studio features new hardwood floors, remodeled bathroom, remodeled kitchen and opens up onto garden with cottage at back which is usually unoccupied. The washer dryer are on level with studio.Total square footage is 650.",
  private_room: true,
  house: false,
  heater: false,
  pool: false,
  parking: false,
  tv: true,
  wifi: true,
  air_con: false,
  kitchen: true
})

lst4 = Listing.create!({
  owner_id: 4,
  title: 'Stylish, cozy, private studio in Bernal Heights',
  address: '1199 Eugenia Ave',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94110,
  latitude: 37.740330,
  longitude: -122.413610,
  num_guests: 2,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 150,
  description: "Our downstairs studio is like a hotel room with its own entrance, a kitchenette, bathroom and a comfy bed. Our home is close to public transportation and lots of shops, restaurants and parks. It is near the lively Mission district and quaint Cortland Ave. There is easy access to 80, 101 and 280 if you're driving south or east. Its best for 1 or 2 people, but might be able to accommodate a couple with 1 child. A small dog would be okay, but there is no outdoor area.

The studio is about the size of a small hotel room, with a queen size bed, smart TV you can watch your own streaming service on, breakfast table and chair, a side chair. There is a closet for your use.

The kitchenette includes an under-counter refrigerator, sink, and microwave, as well as an electric kettle and a French press coffee maker. We provide coffee and tea for you to make yourself. There are glasses, mugs, plates and bowls. There is silverware, a can opener, a bottle opener. We provide granola, oatmeal and some light snacks or breakfast items.

The shower and toilet are each behind a wall for privacy, and there is a heavy curtain separating the bathroom from the studio. There is a door for the toilet. However, the bathroom is not a completely separate room, so the studio is best for people who are comfortable with one another.

Our studio is cozy and quiet, and with the curtain pulled to cover the glass entry door, it is quite private. There is no outdoor space. There is a smart TV and you can sign into your own streaming TV service.
",
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


lst5 = Listing.create!({
  owner_id: 5,
  title: 'Great location on a budget, POOL',
  address: '10628 Mississippi Ave',
  city: 'Los Angeles',
  state: 'CA',
  zip_code: 90025,
  latitude: 34.046990,
  longitude: -118.429980,
  num_guests: 4,
  num_rooms: 3,
  num_beds: 4,
  num_bathrooms: 3,
  price: 60,
  description: "Welcome to our house! Centrally located in historic Hancock Park, we just short drive away from Hollywood Attractions, Beverly Hills, Grove Shopping Center, Universal Studio, Downtown LA! 
Located on a first floor of a main house, guest studio has a separate entrance, ‘en-suite’ bathroom, washer, dryer & small kitchenette (Website hidden by Airbnb) *** PLEASE NOTICE: room is SMALL (10 x 12 feet), but has Quinn size bed***
Little kitchenette has a coffee machine, microwave, electric water kettle, toaster, and all necessary dishes and glasses. I always keep the kitchenette stocked up with coffee, tea, sugar, cream etc. You have full access of the back yard and the pool area to enjoy the warm LA weather and over sized pool. 
If you rent a car, you can park on a street in front of our house-unrestricted parking 24/7.
Enjoy your vacation on a budget. ADULTS ONLY!",
  private_room: false,
  house: true,
  heater: true,
  pool: true,
  parking: false,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: true
})

lst6 = Listing.create!({
  owner_id: 6,
  title: 'ENTIRE MODERN CONDO - DOWNTOWN',
  address: '398 W 2nd St',
  city: 'Los Angeles',
  state: 'CA',
  zip_code: 90012,
  latitude: 34.054240,
  longitude: -118.249470,
  num_guests: 3,
  num_rooms: 2,
  num_beds: 3,
  num_bathrooms: 2,
  price: 154,
  description: "Entire brand new Downtown L.A. flat in Lux complex. FREE Parking, FREE WiFi. Mins to Staples Center, LA Live, Metro 2 blocks away, Convention Center. Walk to all hotspots! Nice bed, Full Kitchen, Pool, Amazing Sundeck, Gym, Lounge 
*Note this apartment is low priced because it is brand new. The price will go up after more reviews.

Welcome to DTLA Lux Flat! All brand new apartment and furniture in an upscale stylish complex! Enjoy the spacious open floor-plan in a lux building located right in the good part of DTLA close to all the hot spots. Walk and take metro everywhere, no car needed!

Relax and unwind in our very comfortable queen bed, 800 thread count sheets, and High Quality Comforter.
*NOTE I also only want excellent guests, who understand that they have to be respectful of my apartment, my neighbors and my building staff.",
  private_room: false,
  house: true,
  heater: true,
  pool: true,
  parking: false,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: true
})

lst7 = Listing.create!({
  owner_id: 2,
  title: 'Poolside Studio in Echo Park',
  address: '1882 Lake Shore Ave',
  city: 'Los Angeles',
  state: 'CA',
  zip_code: 90026,
  latitude: 34.087110,
  longitude: -118.255370,
  num_guests: 2,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 110,
  description: "Awesome basement level two room studio facing pool. Close to: DTLA - HOLLYWOOD - ALL FREEWAYS. Located in Hipster Central, a short Uber ride to DTLA & Hollywood. Walk to Dodger, Stadium, Lassen's Organic Market or the famous Gold Room on Sunset Blvd. All of LA's major freeways easily accessed from the neighborhood. Excellent for couples, solo adventurers, & business travelers.",
  private_room: true,
  house: false,
  heater: true,
  pool: true,
  parking: false,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: true
})

lst8 = Listing.create!({
  owner_id: 4,
  title: 'TOP OF THE HILL ACRES',
  address: '2359 Shoredale Ave',
  city: 'Los Angeles',
  state: 'CA',
  zip_code: 90031,
  latitude: 34.090610,
  longitude: -118.232830,
  num_guests: 3,
  num_rooms: 2,
  num_beds: 3,
  num_bathrooms: 1,
  price: 125,
  description: "Rugged, beautiful landscape with picturesque mountain views and wide open cloudless blue skies. The morning crisp light to the sunset glow.
The perfect spot for any photo shoot. 
Beauty. Simplicity. Nature.

TOP OF THE HILL ACRES will bring you an even more memorable experience this fall and winter. It's also Our favorite time of year. 
The light is magic!
We are still in a dry spell, high hazard fire zone at this time of year. The canyon weather is dry and we need to avoid any sparks of any kind.

Limited wifi is avail for our guests to connect if needed.",
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

lst9 = Listing.create!({
  owner_id: 3,
  title: 'Penthouse Studio East 50s Terrace',
  address: '150 W 84th St',
  city: 'New York',
  state: 'NY',
  zip_code: 10024,
  latitude: 40.785730,
  longitude: -73.975180,
  num_guests: 2,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 107,
  description: "This is a fully furnished short term studio apartment in an elevator building on the 6th floor in the heart of midtown Manhattan. Close to all major subway lines- E, M & 6, major landmarks & shopping, 5 star hotels, restaurants & bars, lively area, its the perfect location to explore the city. Located in East 50s between 2nd & 3rd ave. About a 10 minute walk to Times Square, 3 minutes to Rockefeller Center, and 5 minutes to Central Park. Quiet and safe tree lined street with consulates & embassies across the street, police precinct around the corner. Free street parking available after 7 pm until 8 am weekdays and all day on weekends. Includes over 300 cable & premium channels with a flat screen TV, Hi speed wifi Internet. The studio is about 300 square feet in total, with cooking amenities such as mini fridge, microwave, induction unit for cooking, electric kettle, toaster/convection oven, French press coffee maker but no kitchen. There IS an air conditioner and heater that works very well! Silverware, wine glasses, cups & glasses, and plates/bowls are provided. Queen bed with a pillowtop mattress, a second inflatable twin mattress with bedding can be added and also a foldout single futon. Double paned windows with blackout shades, and a sleep sound machine. Walk in closet with plenty of hanging space. Bathroom includes marble walls and floor, full bathtub & shower, hairdryer, steamer, bedding & towels provided. Bamboo floors in bedroom, wall to wall carpet in entry way, and all marble bathroom. Air conditioning and heating, ceiling fan. Private 600 sf terrace with furniture and a grill that is only for the apartment, not the building is located above the unit and accessible by the stairwell outside of the apt. Laundry facilities in the building also. weekly & monthly rental available also. No Pets allowed and no smoking.",
  private_room: true,
  house: false,
  heater: true,
  pool: false,
  parking: false,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: true
})

lst10 = Listing.create!({
  owner_id: 5,
  title: 'Luxury Central Park Apartment close to everything',
  address: '158 W 81st St',
  city: 'New York',
  state: 'NY',
  zip_code: 10024,
  latitude: 40.783820,
  longitude: -73.976480,
  num_guests: 3,
  num_rooms: 2,
  num_beds: 3,
  num_bathrooms: 2,
  price: 130,
  description: "My place is located close to Central Park West and Columbia University. It is very modern and clean. Public transportation just steps away and can take you everywhere in New York City. My place is good for couples,families with kids,business travelers, friends and solo adventurers.
on 125th street we have one of the best shopping area in NYC. You can find great bargain.
If you like walking, biking,boating and other sport activities Central Park will be your place.
COME TO VISIT NEW YORK CITY!!!",
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

lst11 = Listing.create!({
  owner_id: 6,
  title: 'Soho 2 Bedroom Private Terrace',
  address: '156 Wooster St',
  city: 'New York',
  state: 'NY',
  zip_code: 10012,
  latitude: 40.726230,
  longitude: -73.999270,
  num_guests: 5,
  num_rooms: 2,
  num_beds: 3,
  num_bathrooms: 3,
  price: 470,
  description: "PLEASE ENTER YOUR DATES INTO CALENDAR ON THE RIGHT IN ORDER TO SEE THE PRICE FOR YOUR NIGHTS

THIS IS THE MANHATTAN YOU NEVER KNEW EXISTED
Classic Soho 2 bedroom loft 
PRIVATE TERRACE accessed directly from your apartment
Classic views of NY life
Outdoor Barbecue
2 full bathrooms
Soho is the most chic neighborhood in Manhattan and possibly the world. The architecture, the people watching, the shopping and restaurants need no introduction. Even if you don't stay with me definitely stay in SOHO",
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

lst12 = Listing.create!({
  owner_id: 3,
  title: 'Luxury 2 Bedroom Empire Loft',
  address: '1041 6th Ave',
  city: 'New York',
  state: 'NY',
  zip_code: 10018,
  latitude: 40.753300,
  longitude: -73.985640,
  num_guests: 4,
  num_rooms: 2,
  num_beds: 3,
  num_bathrooms: 2,
  price: 465,
  description: "The grandeur of this 2 bedroom loft compares with only few other properties. The proximity of the Empire State Building form the building's private rooftop will leave you in awe.

Classic Manhattan loft with 14 foot (4.3 meters) ceilings that rarely exists anymore. Designed by a top interior designer and decorated with top of the line finishes and furniture.

More information
Located in Manhattan's classiest neighborhood. Shopping of Madison and 5th Avenue at your doorstep. Class of Park Avenue at your corner.",
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

lst13 = Listing.create!({
  owner_id: 6,
  title: '5min walk/BART. Private entry, bath & kitchenette.',
  address: '1578 22nd Ave',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94112,
  latitude: 37.758290,
  longitude: -122.479874,
  num_guests: 2,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 60,
  description: "The suite is located on the first floor of our home and although there are no common spaces, you may hear us moving about from time to time both upstairs and downstairs. We limit our time downstairs and try to be mindful of noise downstairs while guests are here but we can sometimes be heard going in and out of the back door and up and down the stairs, accessing other rooms, opening closets. Not high traffic, but you'll hear us occasionally.",
  private_room: true,
  house: false,
  heater: true,
  pool: false,
  parking: false,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: true
})

lst14 = Listing.create!({
  owner_id: 6,
  title: 'Ocean View Malibu Hideaway.',
  address: '6003 Zumirez Dr',
  city: 'Los Angeles',
  state: 'CA',
  zip_code: 90265,
  latitude: 34.029040,
  longitude: -118.795560,
  num_guests: 4,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 225,
  description: "A delightful experience often compared with the French Riviera, incredible ocean views. Conveniently located only 23 miles from Los Angeles International Airport (LAX), 15 minutes from Santa Monica, seconds from gorgeous beaches and mountain hikes. If this space is not available for your dates or you need more room we have another super cool larger loft apartment see our profile for the other listing. ",
  private_room: false,
  house: true,
  heater: true,
  pool: false,
  parking: false,
  tv: false,
  wifi: true,
  air_con: true,
  kitchen: true
})

lst15 = Listing.create!({
  owner_id: 4,
  title: 'ENTIRE Floor,PRIVATE Bath&Entrance! SUPERHOST :))',
  address: '2634 Frederick Douglass Blvd',
  city: 'New York',
  state: 'NY',
  zip_code: 10030,
  latitude: 40.819370,
  longitude: -73.944460,
  num_guests: 4,
  num_rooms: 1,
  num_beds: 2,
  num_bathrooms: 3,
  price: 54,
  description: "If you’re looking to get the true NYC experience but don’t want to pay Manhattan prices, but still want to stay close to Manhattan, you’ve found the perfect (Website hidden by Airbnb) only 3 min walking from subway :) Entire spacious floor , clean and reasonably priced, our status as a Super Host allows you to vacation here in confidence. Read on below the rave reviews from people who’ve stayed here before. This one bedroom basement apartment with Private bathroom is more than just a place to sleep.",
  private_room: false,
  house: true,
  heater: true,
  pool: true,
  parking: false,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: true
})



LISTINGS = [lst1, lst2, lst3, lst4, lst5, lst6, lst7, lst8, lst9, lst10, lst11, lst12, lst13, lst14, lst15]

LISTINGS.each.with_index do |lst, idx1|
    (1..5).each do |idx2|
        file = File.open("app/assets/images/seed/lst#{idx1 + 1}/lst#{idx1+ 1}-#{idx2}.jpg")
        lst.photos.attach(io: file, filename: "lst#{idx1 + 1}-#{idx2}.jpg")
    end
end