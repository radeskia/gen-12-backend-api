# Baby's Food Place Project (Backend)

*Backend web application for the recipe blog *
( Demo deployed at https://quiet-caverns-90210.herokuapp.com/ )


## Short summary

This is the server side  for the final project at Semos Full-Stack Javascript development Academy. Built with Node.js, using the Express.js framework and deployed (packed with the production build react-app) to Heroku. 


## Technologies used and summary

This part of the project main purpose is the mastery and practice of the Node.js server-side Javascript, using the Express.js framework and external npm modules listed below

Some of the core concepts in this project's server-side are the CRUD mechanisms which allow writing, updating and deleting data in the database, the Authentication which after user registration grants a user of the application some extra permissions as to write recipes in the collection as well as access his own recipes, the Router which intercepts HTTP requests and after authentication and validation works to store the data in the database, the Route Controllers which do all the muscle work and the error handling in case of irregularities

## External npm modules used :

### bcrypt 
    for password encription, used to encrypt the password before storing in the database

### cookie-parser 
    for intercepting cookies stored in the requests from the frontend

### cors 
    for allowing different sources access to the backend server

### dotenv
    for working with enviroment variables instead of hard-coded public ones

### express-jwt & jsonwebtoken
    for authentication and authorization of requests

### mongoose
    for interacting with a MongoDB database collection

### nodemon & morgan
    for easier debugging during the development process


Author Александар Радески
@radeskia
