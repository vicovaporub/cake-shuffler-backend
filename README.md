# Backend -> Cake Shuffler

## Description

This is a simple and fun project I made for a friend that bakes cakes. She's a bit undecided for the flavors she will bake for the day, so I made this app to help her and test my fullstack coding skills.

This is the backend for the [Cake Shuffler app](https://github.com/vicovaporub/cake-shuffler-frontend) that will handle the form and save new cakes in the database as well as getting the random cake so it can be displayed.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vicovaporub/cake-shuffler-backend.git
   cd cake-shuffler-backend

2. Install dependencies:
    ```bash
    npm install 

3. Start the app:
    ```bash
    npm run dev
    (The server will be running in `http://localhost:3001` as is set in the server.js file)


**NOTE:** The [Cake Shuffler Frontend](https://github.com/vicovaporub/cake-shuffler-frontend) is needed so the app works properly.

## Features
- When a form is submitted, Mongoose will save a new Cake with the "batter flavor", "filling flavor" and "icing flavor" and save it in a MongoDB database.
- When the shuffle button is clicked, the app will access the database and get a random cake from there to display.