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

Link to the commit that sets up a simple HTTP server using express.

[index.js](https://github.com/Garinmckayl/Healthy.me/commit/0fb59d51ef3aa4ca9e617310c5dc5add418450e3)

###Database

```bash
npm install sqlite3
```

Link to the commits that sets tables up in code - 

[Set up food entry table](https://github.com/Garinmckayl/Healthy.me/commit/c1a4f47ba780b7b3abbb7aa88e1c9b8bb70434c8)
[Set up workout table](https://github.com/Garinmckayl/Healthy.me/commit/37d0bde4d189a6f9ec6e0b21608ff71e0ead132c)

### Specifying the API
The very first thing that has to be defined for any web API is the operations it will expose.   
According to the REST principles, an operation is exposed by an HTTP method and an URI.  
The action performed by each operation should not contradict to the natural meaning of its HTTP method.  
The following table specifies the operations of our API in detail -

### REST Endpoints 

| HTTP Method   |  URL                           | Purpose                            | Commit           |
|---------------|--------------------------------|------------------------------------|------------------|
| POST          | /api/foodEntry                 | Registers a new food entry         |[Register a new food entry](https://github.com/Garinmckayl/Healthy.me/commit/16ea56ee5647bc4b68ddd0717d64ebfa84bb59e4)|
| GET           | /api/foodEntry                 | Gets a list of all food entries    |[Get all food entries](https://github.com/Garinmckayl/Healthy.me/commit/adefece3c332708e072cd5120e43c24d01abcf99)|
| GET           | /api/foodEntry/{foodEntryId}   | Gets a food entry by ID            |[Get a food entry by ID](https://github.com/Garinmckayl/Healthy.me/commit/2cd531008dec008ad97497828f249973cdd2e759)|
| PUT           | /api/foodEntry/{foodEntryId}   | Updates a food entry               |[Update a food entry](https://github.com/Garinmckayl/Healthy.me/commit/7b889100d063bb84bcf52143c846dc0dda9bbde9)|
| DELETE        | /api/foodEntry/{foodEntryId}   | Deletes a food entry               |[Delete a food entry](https://github.com/Garinmckayl/Healthy.me/commit/935888bc18b59364a648a96e05848a07b1085606)|
| POST          | /api/workout                   | Registers a new workout            |[Register a new workout](https://github.com/Garinmckayl/Healthy.me/commit/cafe4456b3380d6e0d58330e86b64a3642494d7b)|
| GET           | /api/workout                   | Gets a list of all workouts        |[Get all workouts](https://github.com/Garinmckayl/Healthy.me/commit/f520a5b4452583b184bcc3376e016f21df5a65fd)|
| GET           | /api/workout/{workoutId}       | Get a workout by ID                |[Get a workout by ID](https://github.com/Garinmckayl/Healthy.me/commit/6caa35328dc38d441bd69da8307c416b458270ac)|
| PUT           | /api/workout/{workoutId}       | Updates a workout                  |[Update a workout](https://github.com/Garinmckayl/Healthy.me/commit/c4cbfc0c87ebf0e4bae6d2a10cc70454651a5da6)|
| DELETE        | /api/workout/{workoutId}       | Deletes a workout                  |[Delete a workout](https://github.com/Garinmckayl/Healthy.me/commit/24d643faaf2da7e1986db49208eaf661c98e893c)|


