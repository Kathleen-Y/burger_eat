# burger_eat

### Overview
In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

#### App Setup
1. Create a GitHub repo called `burger` and clone it to your computer.
2. Make a package.json file by running `npm init` from the command line.
3. Install the Express npm package: `npm install express`.
4. Create a server.js file.
5. Install the Handlebars npm package: `npm install express-handlebars`.
6. Install MySQL npm package: `npm install mysql`.
7. Require the following npm packages inside of the server.js file:
   * express

#### Config Setup
1. Inside your `burger` directory, create a folder named `config`.
2. Create a `connection.js` file inside `config` directory.
   * Inside the `connection.js` file, setup the code to connect Node to MySQL.
   * Export the connection.
3. Create an `orm.js` file inside `config` directory.
   * Import (require) `connection.js` into `orm.js`
   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
     * `selectAll()`
     * `insertOne()`
     * `updateOne()`
   * Export the ORM object in `module.exports`.

#### Model setup
* Inside your `burger` directory, create a folder named `models`.
  * In `models`, make a `burger.js` file.
    * Inside `burger.js`, import `orm.js` into `burger.js`
    * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
    * Export at the end of the `burger.js` file.

#### Controller setup
1. Inside your `burger` directory, create a folder named `controllers`.
2. In `controllers`, create the `burgers_controller.js` file.
3. Inside the `burgers_controller.js` file, import the following:
   * Express
   * `burger.js`
4. Create the `router` for the app, and export the `router` at the end of your file.

#### View setup
1. Inside your `burger` directory, create a folder named `views`.
   * Create the `index.handlebars` file inside `views` directory.
   * Create the `layouts` directory inside `views` directory.
     * Create the `main.handlebars` file inside `layouts` directory.
     * Setup the `main.handlebars` file so it's able to be used by Handlebars.
     * Setup the `index.handlebars` to have the template that Handlebars can render onto.
     * Create a button in `index.handlebars` that will submit the user input into the database.

```
### Minimum Requirements
  - Heroku link  
  - README.md 
  - portfolio
  - link to the Github Repository 
 