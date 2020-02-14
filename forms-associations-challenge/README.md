# Rails Forms & Associations Practice

## Part 1: Conceptual questions
1. What’s the difference between form_tag and form_for. When would we use each?
2. Why do we use strong_params?
3. What is a partial and how does it improve our code?

## Part 2: Build a boat rental app to be used by manager of a rental shop
* Boats have many Customers through Rentals
* Customer has many boats through Rentals

### PART 2A - Build rental form - associate rental to customer and boat
* This Form should allow you to choose an EXISTING boat and create a NEW customer
* Make this form a partial so that it can be used to edit the Rental also
* Prove the form works without making any views to display the data. Instead, use the Rails Console and Pry
*  Bonus: Add server validations and display them in form

### PART 2B (IF TIME) - Build a rental index page that lists each rental’s boat and customer
* Link to each boat show page from the rentals index page
* Build a boat show page that lists all the associated rentals