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

lst16 = Listing.create!({
  owner_id: 3,
  title: 'WATERFRONT BAY HOUSE BUNGALOW 15 MIN TO GG BRIDGE',
  address: '3525 Divisadero St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94123,
  latitude: 37.792500,
  longitude: -122.441340,
  num_guests: 2,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 99,
  description: "*SPECIAL $99/NIGHT WEEKDAY PRICING THRU JAN 31ST* 
FANTASTIC STUDIO BUNGALOW TUCKED AWAY ON A SECLUDED WATERFRONT ENCLAVE! UNIT is ONE LARGE ROOM & SEPARATE BATH. SUPER COMFY ADJUSTABLE QUEEN BED. INCLUDES a COMMON DECK WITH DIRECT ACCESS TO THE BAY. SPECTACULAR VIEWS! ACCOMMODATES A MAX. OF 2 GUESTS, (Sorry, no exceptions). 
ONLY GUESTS WHO HAVE BOOKED ARE ALLOWED ON THE PROPERTY.
**NON-SMOKING PROPERTY & NO PETS**
**IMPORTANT**
MANY STEPS FROM STREET TO THE PROPERTY & NO DISABLED ACCESS.",
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

lst17 = Listing.create!({
  owner_id: 5,
  title: 'Garden Retreat steps from Haight St',
  address: '78 Piedmont St
San Francisco, CA 94117',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94117,
  latitude: 37.765440,
  longitude: -122.445010,
  num_guests: 3,
  num_rooms: 1,
  num_beds: 2,
  num_bathrooms: 1,
  price: 185,
  description: "One bedroom sanctuary with a beautiful garden view and cozy fireplace. Comes with it's own entrance just steps from bus lines, train and all that Haight Street has to offer. Complete privacy with a separate bedroom, bathroom, and breakfast bar.",
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

lst18 = Listing.create!({
  owner_id: 6,
  title: 'Mission Dolores Suite',
  address: '385 Liberty St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94114,
  latitude: 37.756930,
  longitude: -122.429810,
  num_guests: 2,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 125,
  description: "Enjoy a luxurious stay in this private 1Bed/1Bath suite in an historic 1912 building. Perfectly located between the Castro and the Mission, walk to all the restaurants, entertainment, shopping, and amenities that these neighborhoods have to offer.",
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

lst19 = Listing.create!({
  owner_id: 4,
  title: 'Fun & Artsy 2 bdrm 2 ba SF Hidden Gem',
  address: '585 Hill St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94114,
  latitude: 37.755090,
  longitude: -122.433980,
  num_guests: 4,
  num_rooms: 2,
  num_beds: 2,
  num_bathrooms: 2,
  price: 145,
  description: "Located one block from shopping, restaurants. Two blocks from Alamo Square Park and the famous Painted Ladies of San Francisco. Expansive living room with wall mural & high ceiling. Spacious dining area. Fully stocked kitchen. Outdoor prvt patio.",
  private_room: false,
  house: true,
  heater: false,
  pool: false,
  parking: false,
  tv: true,
  wifi: true,
  air_con: false,
  kitchen: true
})

lst20 = Listing.create!({
  owner_id: 5,
  title: 'Relaxing Victorian room in SoMa, next to BART!',
  address: '692 Natoma St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94103,
  latitude: 37.781610,
  longitude: -122.405880,
  num_guests: 2,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 59,
  description: "My classic Victorian house is perfectly located in SoMa! A central neighborhood where the MOSCONE center, Downtown, Civic Center BART, Breweries, Coffee Roasters, Nightclubs & delicious Restaurants are all just 5 - 15mins walking distance, making it the perfect place for either buisness or adventure travelers!
The house was recently remodeled and it has plenty of natural light. This is a calm and quiet place where you can rest, relax and enjoy my daily aromatherapy :D",
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

lst21 = Listing.create!({
  owner_id: 5,
  title: 'Historic loft in Pioneer Square',
  address: '214 S Jackson St',
  city: 'Seattle',
  state: 'WA',
  zip_code: 98104,
  latitude: 47.599200,
  longitude: -122.325720,
  num_guests: 4,
  num_rooms: 1,
  num_beds: 2,
  num_bathrooms: 1,
  price: 125,
  description: "Located in the heart of historic Pioneer Square, where local coffee shops and award-winning restaurants literally sit below you. Walking distance from Pike Place Market and downtown. Short cab ride to The Space Needle. 5min walk to waterfront and ferry terminal to Bainbridge & Vashon island. Guests 21yrs and up.",
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

lst21 = Listing.create!({
  owner_id: 2,
  title: 'Pike Place Modern 1Br! Hub to Cruises!',
  address: '214 S Jackson St',
  city: 'Seattle',
  state: 'WA',
  zip_code: 98104,
  latitude: 47.599200,
  longitude: -122.325720,
  num_guests: 4,
  num_rooms: 1,
  num_beds: 2,
  num_bathrooms: 1,
  price: 125,
  description: "Located in the heart of historic Pioneer Square, where local coffee shops and award-winning restaurants literally sit below you. Walking distance from Pike Place Market and downtown. Short cab ride to The Space Needle. 5min walk to waterfront and ferry terminal to Bainbridge & Vashon island. Guests 21yrs and up.",
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

lst22 = Listing.create!({
  owner_id: 3,
  title: 'Pike Place Modern 1Br! Hub to Cruises!',
  address: '200 Pine St',
  city: 'Seattle',
  state: 'WA',
  zip_code: 98101,
  latitude: 47.614850,
  longitude: -122.328890,
  num_guests: 4,
  num_rooms: 1,
  num_beds: 2,
  num_bathrooms: 1,
  price: 71,
  description: "My apartment is a couple steps from Pike Place Market, the Gum Wall, and the Waterfront! It is centrally located for my guests to just walk, no need of a car! My listing has all the amenities you need. This is a 1 bedroom apartment with all the amenities you'll need: washer and dryer, dishwasher, heater, wifi.

Located by the water front, it's a hub to cruises!
Great Sunset view of roof top!",
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

lst23 = Listing.create!({
  owner_id: 5,
  title: 'Dog-friendly designer condo with a loft, sky lounge & gym, near downtown!',
  address: '402 11th Ave',
  city: 'Seattle',
  state: 'WA',
  zip_code: 98122,
  latitude: 47.605370,
  longitude: -122.317850,
  num_guests: 4,
  num_rooms: 1,
  num_beds: 2,
  num_bathrooms: 2,
  price: 96,
  description: "This property is a 923 square feet, 1 Bedroom, 2 bathroom accommodation located in Seattle. Dog-friendly designer condo with a loft, sky lounge & gym, near downtown! offers 1 Sofa bed, 1 Queen bed. It can host 4 people. This accommodation features washer/dryer. Please see the description below or inquire for more details!",
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

lst24 = Listing.create!({
  owner_id: 6,
  title: 'Cozy Downtown Loft Near Pike Place and Stadiums',
  address: '306 Lenora St',
  city: 'Seattle',
  state: 'WA',
  zip_code: 98121,
  latitude: 47.613510,
  longitude: -122.341990,
  num_guests: 4,
  num_rooms: 1,
  num_beds: 2,
  num_bathrooms: 1,
  price: 103,
  description: "Cozy Pioneer Square Loft within walking distance to Pike Place Market, stadiums, and downtown shopping district. Nice, private outdoor deck with stunning view of downtown and Smith Tower. Easily access the light-rail and bus systems.",
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

lst25 = Listing.create!({
  owner_id: 2,
  title: 'Downtown/Convention Ctr B&B - Nice!',
  address: '1501 Belmont Ave',
  city: 'Seattle',
  state: 'WA',
  zip_code: 98122,
  latitude: 47.616350,
  longitude: -122.324480,
  num_guests: 2,
  num_rooms: 1,
  num_beds: 2,
  num_bathrooms: 1,
  price: 78,
  description: "Talk about location! First Hill, Downtown and Capitol Hill meet here! 97% walk score, steps to restaurants, bars, shops, theaters, nightlife. 5-minute walk to the Convention Center. Accommodations include kitchenette, WiFi, street parking permit, washer/dryer, store luggage-all free. Reviews speak for themselves. Rates $69 to $219--like hotels, depending on season and special events. Rent this bedroom with private bathroom and not have to deal with the responsibilities of a whole apartment.",
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

lst26 = Listing.create!({
  owner_id: 3,
  title: 'Spectacular View: Waterfront Condo Near Pike Place',
  address: '2300 Elliott Ave',
  city: 'Seattle',
  state: 'WA',
  zip_code: 98121,
  latitude: 47.612460,
  longitude: -122.348360,
  num_guests: 4,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 136,
  description: "Top floor, south facing condo nestled in downtown Seattle across the street from magnificent Puget Sound. Wake up to the smell of seawater, just outside your front door with easy access to Pike Place Market, Seattle Aquarium and miles of waterfront to explore. Views of Mt. Rainier, Puget Sound waters and Seattle skyscrapers from both living room and bed room, with private patio overlooking the ships in Elliot Bay. This condo is close to many attractions and restaurants in downtown Seattle.",
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

lst27 = Listing.create!({
  owner_id: 4,
  title: 'Spectacular View: Waterfront Condo Near Pike Place',
  address: '517 Yesler Way',
  city: 'Seattle',
  state: 'WA',
  zip_code: 98104,
  latitude: 47.601700,
  longitude: -122.322460,
  num_guests: 2,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 70,
  description: "Right off of Yesler street. This space provides an open view of the city. Sleeps 2 persons on a full bed. Property includes laundry mat and gym. Access to pool table, TV, and vending machine in the common area. Several blocks away there are convenient stores as well as Broadcast Coffee Shop and local bars.",
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

lst28 = Listing.create!({
  owner_id: 4,
  title: 'Downtown 1BD with Free Parking and WaterView',
  address: '62 Cedar St',
  city: 'Seattle',
  state: 'WA',
  zip_code: 98121,
  latitude: 47.614780,
  longitude: -122.352280,
  num_guests: 2,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 70,
  description: "A beautiful, spacious and luxury 1BD in Seattle downtown with gorgeous water view, close to shop and entertainment district, Pike Place Market and the waterfront. Enjoy the incredible water and city views on the roof top. Free parking and Queen size bed provided.",
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

lst29 = Listing.create!({
  owner_id: 6,
  title: 'POPULAR CHIC CONDO+PARKING DTLA/ARTDIST/LILTOKYO中文',
  address: '245 San Pedro St',
  city: 'Los Angeles',
  state: 'CA',
  zip_code: 90012,
  latitude: 34.048820,
  longitude: -118.242072,
  num_guests: 2,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 70,
  description: "Recently updated 1 bedroom/1 bathroom condo with private entrance located close to Little Tokyo/Art District with only less than 10 min walk to the Mariachi Metro Station. It’s only 2 stops to Little Tokyo and 3 stops to Union Station. Take advantage on the convenience that our condo has to offer you.",
  private_room: true,
  house: false,
  heater: true,
  pool: false,
  parking: true,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: false
})

lst30 = Listing.create!({
  owner_id: 5,
  title: 'Stylish Hollywood Loft with Views!',
  address: '1933 N Highland Ave',
  city: 'Los Angeles',
  state: 'CA',
  zip_code: 90068,
  latitude: 34.104930,
  longitude: -118.339892,
  num_guests: 3,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 85,
  description: "Perfect for a couple, 700 square feet, amazing views, facing west for the sunset every night, gated parking and entry, gym, wood floor, new appliances, and wifi. This is a fully furnished loft, and I live here when I don't rent it, so unlike many other AIRBNB's in Hollywood and LA this has a personal touch!

Right near the 101 if you need to get on the freeway. Right across the street from the new Netflix building (in case you're here working or doing business with them). Head West 5 minutes and you hit the W Hotel (which you can see from the bay of windows, you an also stay there but they charge twice as much for a smaller room!) (metro stop right there as well). Countless bars, restaurants, and clubs are in the same area as well as the Arclight, a great movie theatre, and Amoeba, a famous record store for all your musical needs!",
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

lst31 = Listing.create!({
  owner_id: 3,
  title: 'Spacious Studio in Universal City',
  address: '3297 Tareco Dr',
  city: 'Los Angeles',
  state: 'CA',
  zip_code: 90068,
  latitude: 34.128828,
  longitude: -118.342247,
  num_guests: 3,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 48,
  description: "Modern Studio offers California living at its finest! This unique & private room has new furniture, a deluxe pillow-top mattress, and a private full bathroom. Walking distance to trendy restaurants, bars, shops, LA Fitness, Universal Studios City Walk, & Hollywood. A few miles away from Runyon Canyon, LA Zoo, W.B. Studios. This place is good for couples, solo adventurers, and business travelers.",
  private_room: true,
  house: false,
  heater: true,
  pool: false,
  parking: true,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: true
})

lst32 = Listing.create!({
  owner_id: 4,
  title: 'URBAN DOWNTOWN LA POOL TABLE PENTHOUSE SUITE+5BEDS',
  address: '640 S Grand Ave',
  city: 'Los Angeles',
  state: 'CA',
  zip_code: 90017,
  latitude: 34.128828,
  longitude: -118.342247,
  num_guests: 6,
  num_rooms: 2,
  num_beds: 5,
  num_bathrooms: 2,
  price: 185,
  description: "This 1600 sq. ft. Downtown Los Angeles Super luxury suite is located on the 33rd floor in, 35 story building located in the heart of Downtown LA. This Penthouse rivals any of the local 5 star hotels featuring incredible views of Downtown Los Angeles. This two Bedroom two Bathroom unit is decorated with ultra luxury modern furniture and artwork. This 1600 sq. ft. Downtown Los Angeles Super luxury suite is located on the 33rd floor in, 35 story building located in the heart of Downtown LA. This Penthouse rivals any of the local 5 star hotels featuring incredible views of Downtown Los Angeles. This two Bedroom two Bathroom unit is decorated with ultra luxury modern furniture and artwork. Enjoy breathtaking panoramic views of Downtown Los Angeles from our spacious furnished balcony. Brush up on your pool skills with our high end pool table.",
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

lst33 = Listing.create!({
  owner_id: 5,
  title: 'Beautiful 2 Bd/2 Ba in Hollywood',
  address: '6900 Bonita Terrace',
  city: 'Los Angeles',
  state: 'CA',
  zip_code: 90068,
  latitude: 34.104730,
  longitude: -118.340318,
  num_guests: 4,
  num_rooms: 2,
  num_beds: 3,
  num_bathrooms: 2,
  price: 100,
  description: "Recently remodeled apartment in Hollywood. Very large open space with modern kitchen and chic furniture. A few blocks to fantastic restaurants, beautiful shops, and all that Hollywood has to offer.",
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

lst34 = Listing.create!({
  owner_id: 2,
  title: 'Private Studio Apartment in Harlem',
  address: '142 W 133rd St',
  city: 'New York',
  state: 'NY',
  zip_code: 10030,
  latitude: 40.813284,
  longitude: -73.943475,
  num_guests: 3,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 100,
  description: "A newly renovated, clean, modern, private studio apartment in my family's house on a cute block in Harlem. A/C and heating system, free Wifi, a TV with Roku logged into Netflix, fridge, microwave, queen size bed and optional airbed for an extra guest.",
  private_room: false,
  house: true,
  heater: true,
  pool: false,
  parking: true,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: false
})

lst35 = Listing.create!({
  owner_id: 3,
  title: 'Spacious Manhattan Apartment near Central Park',
  address: '16 W 104th St',
  city: 'New York',
  state: 'NY',
  zip_code: 10025,
  latitude: 40.813284,
  longitude: -73.943475,
  num_guests: 2,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 103,
  description: "The apartment is located just a few steps from Central Park in a charming neighborhood filled with wonderful cafes, bars and restaurants. The flat sits on a very quiet, tree-lined street that's dotted with prewar Beaux-Arts and landmark brownstone buildings.

The three - room flat has air conditioning and includes WiFi and TV. It has a newly renovated kitchen and wonderfully renovated bath in a well-appointed, very clean and quiet apartment with modern decor. The apartment has a full-size bed, hardwood floors, 10-foot high ceilings and plenty of natural light. All utilities, linens, towels etc are included in the price. There are no extra cleaning fees. This is not a share. You will have it to yourself.",
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

lst36 = Listing.create!({
  owner_id: 4,
  title: 'BEST LOCATION in MANHATTAN !',
  address: '111 W 88th St',
  city: 'New York',
  state: 'NY',
  zip_code: 10024,
  latitude: 40.788288,
  longitude: -73.971820,
  num_guests: 3,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 1,
  price: 165,
  description: "This Manhattan location has it all! It's right at the border of Chelsea, Meatpacking and West Village.
Chelsea -a center of the New York art world. All the galleries, Chelsea Market, Amazing High Line Park, New York Live Arts and Rubin Museum of Art, flea markets.
West Village - bohemian neighborhood with celebrity houses, ethnic restaurants, cute bakeries, top bars for spirit and cocktail lovers.
Meatpacking district - a trendy spot with designers boutiques, Apple store, luxury rooftops, rich club life and fancy hotels. 
Union Square - National Historic Landmark, famous for its amazing farmer's market, various performers, statues of President George Washington and Mohandas Gandhi, as well as Metronome.
And don't forget to take your sneakers for a great run at Hudson River Park :)",
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

lst37 = Listing.create!({
  owner_id: 6,
  title: 'TriBeCa 2500 Sq Ft w/ Priv Elevator',
  address: '57 Leonard St',
  city: 'New York',
  state: 'NY',
  zip_code: 10013,
  latitude: 40.717994,
  longitude: -74.006085,
  num_guests: 12,
  num_rooms: 3,
  num_beds: 3,
  num_bathrooms: 2,
  price: 350,
  description: "2500 square feet TriBeCa loft with 13-feet exposed beam ceilings, hardwood floors and over-sized windows. Three bedrooms, two bathrooms, large kitchen, washer/dryer, art, and modern furnishings. We own our building, live on the premises, and are available for assistance at all times. We are in compliance with all local and state rent laws.",
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

lst38 = Listing.create!({
  owner_id: 2,
  title: 'Most breathtaking view of Manhattan',
  address: '598 E 88th St',
  city: 'New York',
  state: 'NY',
  zip_code: 10128,
  latitude: 40.776448,
  longitude: -73.944545,
  num_guests: 4,
  num_rooms: 2,
  num_beds: 2,
  num_bathrooms: 2,
  price: 500,
  description: "This stunning apartment is located in one of the most desirable locations in NYC at McCarren Park facing the Williamsburg waterfront on the East River enjoying spectacular views of the city spanning from Lower Manhattan all the way up to the Queens Borough Bridge. This contemporary corner apt is covered with knee to ceiling windows, with rich, wide-plank American walnut floors, custom designed kitchen with sub-zero fridge, viking ovens, chrome hardware, marble countertops with pure crystal white backsplash and a host of sleek appliances. Baths are framed by custom tiling, contemporary chrome fixtures and a frameless glass-enclosed shower with rain head and separate soaking tub. It is easy to relax and enjoy this exclusive view from the comfort of the stylish living room when the Empire State Building and Chrysler Building sit right in front of you or while lounging on the terrace. And if you feel like breaking a sweat go downstairs to the gym or outside for a run at McCarren Park or for a swim in the pool at the park as well. Exclusive wi-fi internet, TV Cable and audio system available. Williamsburg is the most trendy neighborhood in NYC with extremely interesting and creative bars and restaurants run by artsy people. For public transit, the Bedford L train station is just five blocks away.",
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

lst39 = Listing.create!({
  owner_id: 4,
  title: 'Cozy Place in Noe Valley',
  address: '886 Noe St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94114,
  latitude: 37.754882,
  longitude: -122.432306,
  num_guests: 3,
  num_rooms: 1,
  num_beds: 2,
  num_bathrooms: 1,
  price: 185,
  description: "One of the best neighborhoods in the city. Centrally located and very authentically SF. Easy commute to Downtown, Castro or Mission. In the center of it all but away from hustle, bustle and noise of the city. Ideal for a single person or a couple. 3rd person can comfortably sleep on a futon bed in the living room.",
  private_room: false,
  house: true,
  heater: true,
  pool: false,
  parking: true,
  tv: true,
  wifi: true,
  air_con: true,
  kitchen: false
})

lst40 = Listing.create!({
  owner_id: 5,
  title: 'SoMa Second Home, Garden Suite',
  address: '298 Cumberland St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: 94114,
  latitude: 37.758847,
  longitude: -122.430197,
  num_guests: 3,
  num_rooms: 1,
  num_beds: 1,
  num_bathrooms: 2,
  price: 240,
  description: "ADULTS ONLY NOT FAMILY FRIENDLY Thank you for understanding!
NO children or grandchildren of any age under 18 years old are allowed on the property at any time. Includes infants, NO KIDS of any age!
NO SMOKERS.
The Garden Suite is a private studio in my home, with a private entrance and private everything else! You will have your own bathroom/ bedroom/ small coffee bar with fridge, microwave, toaster, and tea kettle. The Suite is all yours!",
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



LISTINGS = [lst1, lst2, lst3, lst4, lst5, lst6, lst7, lst8, lst9, lst10, lst11, lst12, lst13, lst14, lst15, lst16, lst17, lst18, lst19, lst20, lst21, lst22, lst23, lst24, lst25, lst26, lst27, lst28, lst29, lst30, lst31, lst32, lst33, lst34, lst35, lst36, lst37, lst38, lst39, lst40]

LISTINGS.each.with_index do |lst, idx1|
    (1..5).each do |idx2|
        file = File.open("app/assets/images/seed/lst#{idx1 + 1}/lst#{idx1+ 1}-#{idx2}.jpg")
        lst.photos.attach(io: file, filename: "lst#{idx1 + 1}-#{idx2}.jpg")
    end
end