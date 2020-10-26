# Backend 

Building the REST API

What is REST?

Tech Stack

- NodeJs
- Express
- SQLite

Project Setup

```bash
npm init
```

Fill in the required information.

What we choose - 

```
package name: (backend) healthyme-backend
version: (1.0.0)
description: Healthy.me Backend
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC) MIT
```

For quick development we will install nodeman.
(nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.)

```bash
sudo npm install nodemon -g
```

Install Middleware

### Express
Express is a minimalistic HTTP server.

```bash
npm install --save express
```

```bash
npm install --save body-parser
```

```bash
npm install --save cors
```

Setup Express 

[index.js](https://github.com/Garinmckayl/Healthy.me/commit/0fb59d51ef3aa4ca9e617310c5dc5add418450e3)

###Database

```bash
npm install sqlite3
```

[db.js](https://github.com/Garinmckayl/Healthy.me/commit/c1a4f47ba780b7b3abbb7aa88e1c9b8bb70434c8)


### Specifying the API
The very first thing that has to be defined for any web API is the operations it will expose.   
According to the REST principles, an operation is exposed by an HTTP method and an URI. 
The action performed by each operation should not contradict to the natural meaning of its HTTP method. 
The following table specifies the operations of our API in detail -

### REST Endpoints 

POST /api/foodEntry  
PUT /api/foodEntry/{foodEntryId}  
GET /api/foodEntry  
GET /api/foodEntry/{foodEntryId}  
DELETE /api/foodEntry/{foodEntryId}  

POST /api/workout  
PUT /api/workout/{workoutId}  
GET /api/workout  
GET /api/workout/{workoutId}  
DELETE /api/workout/{workoutId}  

GET /api/calorieCount  




