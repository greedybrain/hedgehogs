module RentalsHelper

    def rental_date(rental)
        rental.rental_date.strftime("%A, %d %b %Y")
    end
    # Build a view helper method that displays the rental date in the 
    # format: "Day_of_Week, Month Day, Year" ("Monday, January 3, 2019") and use this on the Boat index page
end
