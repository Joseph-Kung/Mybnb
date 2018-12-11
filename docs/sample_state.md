```js
{
  entities: {
    listings: {
      1: {
        id: 1,
        title: "Lovely quiet home",
        address: "123 Street name",
        city: "San Francisco ",
        state: "California",
        latitude: 37.6434962,
        longitude: -122.4318922,
        numRooms: 2,
        numBathrooms: 2,
        price: 300,
        privateRoom: true
        house: false,
        washer: true,
        dryer: true,
        parking: true,
        tv: true,
        wifi: true,
        airCon: false,
        kitchen: true,
        description: "Quiet home in SF, great place to stay for the weekend"
        listingType: "Single home"
      },
      2: {
        id: 2,
        title: "Pleasant nice home",
        address: "444 Street avenue",
        city: "Los Angeles",
        state: "California",
        latitude: 37.6434962,
        longitude: -122.4318922,
        numRooms: 5,
        numBathrooms: 4,
        price: 600,
        privateRoom: true
        house: false,
        washer: false,
        dryer: false,
        parking: true,
        tv: true,
        wifi: true,
        airCon: false,
        kitchen: true,
        description: "Large home in LA, great place to stay for the weekend"
        listingType: "Single home"
      },
      3: {
        id: 3,
        title: "Convenient studio in New York",
        address: "123 Street boulevard",
        city: "New York",
        state: "New York",
        latitude: 37.6434962,
        longitude: -122.4318922,
        numRooms: 1,
        numBathrooms: 1,
        price: 300,
        privateRoom: false
        house: true,
        washer: true,
        dryer: true,
        parking: true,
        tv: false,
        wifi: true,
        airCon: false,
        kitchen: true,
        description: "Comfy studio in NY, very close to time square"
        listingType: "Studio"
      },  
    },
    users: {
      1: {
        id: 1,
        email: "firstrender@email.com",
        firstName: "Big",
        lastName: "Money"
      },
      2: {
        id: 2,
        email: "homeowner@email.com",
        firstName: "Land",
        lastName: "Lord"
      }
    },
    bookings: {
      1: {
        id: 1,
        listingId: 1,
        renterId: 1,
        startDate: 1/10/2018,
        endDate: 1/15/2018,
        numGuests: 2
      },
      2: {
        id: 2,
        listingId: 1,
        renterId: 2,
        startDate: 12/02/2018,
        endDate: 12/04/2018,
        numGuests: 4
      },
      3: {
        id: 3,
        listingId: 2,
        renterId: 3,
        startDate: 10/15/2018,
        endDate: 10/17/2018,
        numGuests: 3
      },
    },
    reviews: {
      1: {
        id: 1,
        listingId: 1,
        userId: 1,
        body: "Awesome location!",
        numStars: 5
      }
      2: {
        id: 2,
        listingId: 2,
        userId: 3,
        body: "Very close to the park! highly recommend!",
        numStars: 5
      }
      3: {
        id: 3,
        listingId: 3,
        userId: 2,
        body: "Dirty sheets. Stay away!",
        numStars: 1
      }
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    booking: ["Listing unavailable during requested time"],
  },
  session: { currentUserId: 1 }
}
```