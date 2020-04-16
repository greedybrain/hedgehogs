class RentalsController < ApplicationController

    def new
        @rental = Rental.new
    end

    def index
        @rental = Rental.first
    end

    def create
    end

    def edit
    end

    
end
