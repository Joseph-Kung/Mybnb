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
  description: "Come stay at our fully remodeled spacious studio/in-law, that opens onto mature garden, patio and BBQ. Granite countertops in kitchen and bathroom, hardwood floors, featuring live edge breakfast bar and lots of natural light. Bonus room, (walk through room) with futon that converts to queen bed. Seperate entrance from main house. Blocks from the famous Cliff House, Ocean beach and Golden Gate Park. Bus stops outside studio and will take you to downtown S.F.

More information
The space

We have a queen bed and additional single futon in main studio area, and a queen futon in the bonus room. Both rooms have plenty of built in closet space. The studio features new hardwood floors, remodeled bathroom, remodeled kitchen and opens up onto garden with cottage at back which is usually unoccupied. The washer dryer are on level with studio.Total square footage is 650.",
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

More information
The space

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

More information
The space

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

More information
The space

*Note this apartment is low priced because it is brand new. The price will go up after more reviews.

Welcome to DTLA Lux Flat! All brand new apartment and furniture in an upscale stylish complex! Enjoy the spacious open floor-plan in a lux building located right in the good part of DTLA close to all the hot spots. Walk and take metro everywhere, no car needed!

APARTMENT FEATURES:
• Sleeps 3
• You get the entire apartment 
• Nice Queen Bed + Single Rollaway (Upon request)
• FREE Parking
• FREE WiFi 
• Saline Pool
• Poolside lounge 
• Roof deck with cool-down showers. Cheers to that!
•Controlled-access building
•Two-level fitness center packed with equipment for strength and cardio training
•Cardio equipment features personal viewing screens and ipod connectivity
•Community recreation room with billiards
•Disappearing glass wall connects recreation room to exterior pool-side lounge
•Pool-side lounge includes open-air kitchen, cabana seating, water feature and outdoor fireplace
•Expansive roof-top park with sunning area, deluge shower, heated spa, grilling stations and fire pit
•Media room
•Rooftop Big Screen TV
•100% Non-smoking
• HD Smart TV 
• Loft Style
• Personal Washer Dryer
• Full Kitchen 
• Stainless steel appliances 
• Full Size Refrigerator 
• Dishwasher, Microwave, Full Size Stove
• Microwave, Toaster, Coffee Maker
• Central Air conditioning and Heat 
• All brand new furniture and apartment 
• Bathtub 
• Hand Soap 
• Shampoo 
• Cleaned by professional maids
• Pot, Pan, Dishes, Silverware, Pillows, Towels, Hair Dryer, Iron and Ironing Board, all provided 
• Elevator
• Spoken languages: English, Russian, Spanish 
• Airport pickup available for extra fee

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

More information
The space

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

LISTINGS = [lst1, lst2, lst3, lst4, lst5, lst6, lst7, lst8]

LISTINGS.each.with_index do |lst, idx1|
    (1..5).each do |idx2|
        file = File.open("app/assets/images/seed/lst#{idx1 + 1}/lst#{idx1+ 1}-#{idx2}.jpg")
        lst.photos.attach(io: file, filename: "lst#{idx1 + 1}-#{idx2}.jpg")
    end
end