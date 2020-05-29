# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
* --


Rails Authentication & Authorization

Part 1: Conceptual questions
Define each: Identification, Authentication, Access Policy, Authorization
What is statelessness in the context of the http request cycle?
Why do we want state sometimes? How do we add it?

Part 2: Coding Challenge
In the previous challenge you built one/several of the following for a boat rental app: a helper method to display a formatted rental date, a custom query method to return all rentals happening in the future, nested routes for boats & rentals
This week's challenge focuses on protecting that data through user accounts
Reminder: This app is used by the manager of a boat rental shop. We will be setting up admin (for the manager) and general user (for other employees) accounts.

PART 2A - Build an Authentication System
Build the necessary controllers/routes/models/views to allow a general user to create an account
Build the necessary controllers/routes/models/views to allow a user to log in as a general user or an admin

PART 2B - Build an Authorization System
Add the necessary logic to the models/controllers to accomplish the following:
If a user is logged in and has admin privileges, they can see all and edit rental data
If a user is logged in and has general user privileges, they can only see all rental data
If a user is not logged in, they can not see any rental data