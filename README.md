## User authentication program

## Setting up your app and database
* [x] Install Express
* [x] Install Express packages:
    * [x] sequelize
    * [x] sequelize-cli
    * [x] pg
    * [x] connect-pg-simple
    * [x] express-session
    * [x] bcrypt
    * [x] passport
    * [x] passport-local
* [x] Create a database
* [x] Initialize Sequelize via the command line
* [x] Configure database in config.json
* [x] Create a User model
* [x] Configure User model
    * [x] Make id field uuid
    * [x] Configure other column fields if necessary
* [x] Create UUID extension -- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
* [x] Configure your table data to be created every time the server starts, if it doesn't already exist
* [x] Sync User table by starting server

## Registration Template
* [x] Create a new registration template
* [x] Configure your index.js to accept a GET and POST route for the registration page
* [x] Test your form submission by passing 'res.send()' into your POST route functionality

## Database Integration
* [x] Configure POST route so that data from the form will be sent to the server after you submission
* [x] Test

## Hash and salting passwords
* [ ] Using bcrypt, create functionality to encrypt user registration passwords (known as hashing) and randomizing them (known as salting) to make it harder for hackers to reverse engineer passwords
* [ ] We must add in the encryption configuration in the User model, then use Sequelize's beforeCreate() hook function to make sure that whenever we submit the data to the server, it hashes and encrypts the password BEFORE it saves it to the database.
* [ ] Go through registration for and submit the information again. Check your database and make sure the password field is hashed and salted.
