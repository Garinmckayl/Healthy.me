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

```bash
npm install sqlite3
```

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