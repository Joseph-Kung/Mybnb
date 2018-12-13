class ChangeListingAttributes < ActiveRecord::Migration[5.2]
  def change
    rename_column :listings, :washer, :heater
    rename_column :listings, :dryer, :pool
  end
end
