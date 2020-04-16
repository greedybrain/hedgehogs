class Customer < ApplicationRecord
    has_many :rentals
    has_many :rentals, through: :boats
end
