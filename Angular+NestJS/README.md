# HOW TO RUN THIS PROJECT

## DATABASE CREATION
1) Download from your browser Postgres and add its bin folder to the environment variable (or instead you can use pgAdmin to create databases and run queries).
2) Open the terminal and type: psql -U postgres (if postgres is the default user you configured when installing) and run the queries below.
3) CREATE DATABASE transportation;
4) \c transportation
5) CREATE TABLE flights (id SERIAL, 
origin VARCHAR(20), 
destination VARCHAR(20), 
flightNumber INT, 
depart TIMESTAMP WITH TIME ZONE,
arrive TIMESTAMP WITH TIME ZONE, 
nonstop BOOLEAN);
5) 

## RUNNING BACK-END
1) Open the folder NestJSFlights in the terminal and run: npm install
2) Configure the database access in src/app.module.ts
3) Run the server with: npm run start

## RUNNING FRONT-END
1) Open the folder AngularFlights in the terminal and run: npm install
2) Run the application with : ng serve --open