# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
skip = Boat.create(name: "Barking Dog", boat_type: "skipper", port: "New Orleans")
customer = Customer.create(name: "Jared", destination: "Mexico")
rental = Rental.create(customer_id: customer.id, boat_id: skip.id, rental_date: Time.now)