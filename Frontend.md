# Backend 

Building the User Interface of healthyme app


Tech Stack

- ReactJs(create-react-app)
- Bootstrap Css
- Axios

Project Setup

```bash
npx create-react-app healthyme
cd healthyme
npm start
```

Fill in the required information.

What we choose - 

```
package name: (backend) healthyme-frontend
version: (1.0.0)
description: Healthy.me Frontend
test command:
git repository:
keywords:
author:
license: (ISC) MIT
```


starting the app
```bash
npm start
```

Building the app for production
```bash
npm run build
```



### REST request Endpoints 

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
