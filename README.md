# LAB: HTTP and REST (06)

## Simple API

### Author: Earl Jay Caoile

### Links and Resources

- [submission PR](https://github.com/earljay-caoile-401-advanced-javascript/simple-api/pull/1)
- [GitHub Actions](https://github.com/earljay-caoile-401-advanced-javascript/simple-api/actions)

#### Documentation

- [JSON-Server Docs (GitHub)](https://github.com/typicode/json-server)

### Setup

#### Starting up the app

##### Original Lab

Type the following into the Terminal or Git Bash: `json-server --watch ./data/db.json`

Routes work off the following URL: `http://localhost:3000`
- i.e.: get route for categories is `http://localhost:3000/categories`
- get route for individual category is the whole get route plus category ID: i.e. `http://localhost:3000/categories/1`

##### Stretch Goal

Type the following into the Terminal or Git Bash: `node server.js`

Routes work off the following URL: `http://localhost:3000/api/v1`
- i.e.: get route for categories is `http://localhost:3000/api/v1/categories`
- get route for individual category is the whole get route plus category ID: i.e. `http://localhost:3000/categories/api/v1/1`

Check that the server is working properly by verifying with this [React application](https://w638oyk7o8.csb.app/)

- In the form at the top of the page, enter the URL to your API Server
- This server is configured to use the routes noted in the first lab requirement
- If your server is working, this app will show your API Data!

#### Tests

- Testing command: `npm test` from root directory

#### UML

![UML Image](lab-06-UML.png "uml diagram")
