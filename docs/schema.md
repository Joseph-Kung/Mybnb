# Database Schema - Yurbnb

### `users`

| column name     | data type | details                   |
|-----------------|-----------|---------------------------|
| id              | integer   | not null, primary key     |
| email           | string    | not null, indexed, unique |
| first_name      | string    | not null                  |
| last_name       | string    | not null                  |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |
| created_at      | datetime  | not null                  |
| updated_at      | datetime  | not null                  |

* indexed on email, session_token, unique: true

### `listings`

| column name   | data type | details                       |
|---------------|-----------|-------------------------------|
| id            | integer   | not null, primary key         |
| owner_id      | integer   | not null, indexed, foreign key|
| title         | string    | not null                      |
| address       | string    | not null, unique              |
| city          | string    | not null, index               |
| state         | string    | not null                      |
| zip_code      | integer   | not null                      |
| latitude      | float     | not null                      |
| longitude     | float     | not null                      |
| num_rooms     | integer   | not null                      |
| num_bathrooms | integer   | not null                      |
| price         | integer   | not null                      |
| description   | text      | not null                      |
| private_room  | boolean   | not null                      |
| house         | boolean   | not null                      |
| washer        | boolean   | not null                      |
| dryer         | boolean   | not null                      |
| parking       | boolean   | not null                      |
| tv            | boolean   | not null                      |
| wifi          | boolean   | not null                      |
| air_con       | boolean   | not null                      |
| kitchen       | boolean   | not null                      |
| created_at    | datetime  | not null                      |
| updated_at    | datetime  | not null                      |

* owner_id is a foreign key to the listing owner (user)
* indexed on owner_id, unique: true
* indexed on city 

### `bookings`

| column name | data type | details                |
|-------------|-----------|------------------------|
| id          | integer   | not null, primary key  |
| listing_id  | integer   | not null, foreign key  |
| renter_id   | integer   | not null, foreign key  |
| start_date  | datetime  | not null               |
| end_date    | datetime  | not null               |
| num_guests  | integer   | not null               |
| created_at  | datetime  | not null               |
| updated_at  | datetime  | not null               |

* listing_id is a foreign key to the listing that is booked
* renter_id is a foreign key to the user that is booking the listing
* index on [:listing_id, :renter_id], unique: true

### `reviews`

| column name | data type | details                |
|-------------|-----------|------------------------|
| id          | integer   | not null, primary key  |
| listing_id  | integer   | not null, foreign key  |
| user_id     | integer   | not null, foreign key  |
| body        | text      | not null               |
| num_stars   | integer   | not null               |
| created_at  | datetime  | not null               |
| updated_at  | datetime  | not null               |

* listing_id is a foreign key to the listing that is booked
* user_id is a foreign key to the user leaving the review
* index on [:listing_id, user_id], unique: true