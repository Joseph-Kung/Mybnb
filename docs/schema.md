# Database Schema - Mybnb

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

* indexed on username, email, session_token, unique: true

### `spots`

| column name   | data type | details                       |
|---------------|-----------|-------------------------------|
| id            | integer   | not null, primary key         |
| owner_id      | integer   | not null, unique, foreign key |
| listing_title | string    | not null, unique, foreign key |
| address       | string    | not null, unique              |
| city          | string    | not null                      |
| state         | string    | not null                      |
| zip_code      | integer   | not null                      |
| num_rooms     | integer   | not null                      |
| num_bathrooms | integer   | not null                      |
| price         | integer   | not null                      |
| description   | string    | not null                      |
| listing_type  | string    | not null                      |
| created_at    | datetime  | not null                      |
| updated_at    | datetime  | not null                      |

* owner_id is a foreign key to the spot owner (user)
* indexed on owner_id, unique: true
* indexed on city 

### `bookings`

| column name | data type | details                |
|-------------|-----------|------------------------|
| id          | integer   | not null, primary key  |
| spot_id     | integer   | not null, foreign key  |
| renter_id   | integer   | not null, foreign key  |
| start_date  | datetime  | not null               |
| end_date    | datetime  | not null               |
| num_guests  | integer   | not null               |
| description | string    | not null               |
| created_at  | datetime  | not null               |
| updated_at  | datetime  | not null               |

* spot_id is a foreign key to the spot that is booked
* renter_id is a foreign key to the user that is booking the spot
* index on [:spot_id, :renter_id], unique: true

### `reviews`

| column name | data type | details                |
|-------------|-----------|------------------------|
| id          | integer   | not null, primary key  |
| spot_id     | integer   | not null, foreign key  |
| user_id     | integer   | not null, foreign key  |
| body        | string    | not null               |
| num_stars   | integer   | not null               |
| created_at  | datetime  | not null               |
| updated_at  | datetime  | not null               |

* spot_id is a foreign key to the spot that is booked
* user_id is a foreign key to the user leaving the review
* index on [:spot_id, user_id], unique: true

### `ammenities`

| column name | data type | details                |
|-------------|-----------|------------------------|
| id          | integer   | not null, primary key  |
| spot_id     | integer   | not null, foreign key  |
| name        | string    | not null               |
| created_at  | datetime  | not null               |
| updated_at  | datetime  | not null               |

* spot_id is a foreign key to the spot with the ammenity
* indexed on spot_id