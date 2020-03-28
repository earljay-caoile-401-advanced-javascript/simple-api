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

Type the following into the Terminal or Git Bash: `json-server --watch ./data/db.json`

**Optional**: to observe the stretch goal requirement of formatting get command with a results array and a count, type `node server.js` into the terminal instead.

Check that the server is working properly by verifying with this [React application](https://w638oyk7o8.csb.app/)

- In the form at the top of the page, enter the URL to your API Server
- This server is configured to use the routes noted in the first lab requirement
- If your server is working, this app will show your API Data!

#### Tests

- Testing command: `npm test` from root directory

#### UML

![UML Image](lab-06-UML.png "uml diagram")
