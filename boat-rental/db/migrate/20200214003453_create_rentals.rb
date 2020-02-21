class CreateRentals < ActiveRecord::Migration[6.0]
  def change
    create_table :rentals do |t|
      t.integer :customer_id
      t.integer :boat_id

      t.timestamps
    end
  end
end
