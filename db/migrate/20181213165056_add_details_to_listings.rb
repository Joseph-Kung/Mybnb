class AddDetailsToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :num_guests, :integer, null: false
    add_column :listings, :num_beds, :integer, null: false
  end
end
