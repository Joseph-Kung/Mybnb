class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false
      t.string :address, null: false, unique: true
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip_code, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :num_rooms, null: false
      t.integer :num_bathrooms, null: false
      t.integer :price, null: false
      t.text :description, null: false
      t.boolean :private_room, null: false
      t.boolean :house, null: false
      t.boolean :washer, null: false
      t.boolean :dryer, null: false
      t.boolean :parking, null: false
      t.boolean :tv, null: false
      t.boolean :wifi, null: false
      t.boolean :air_con, null: false
      t.boolean :kitchen, null: false
      
      t.timestamps
    end

    add_index :listings, :owner_id
    add_index :listings, :city
  end
end
