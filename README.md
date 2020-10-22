# Healthy Me
## Build a Smart health tracking app using Reactjs and Wit.it

### Inspiration
Health is the most important and valuable asset we have when living in this world, yet we take it for granted. And It is often difficult for us to realize it’s value until we loss it, So thought building an app to track our health is very important We called the app healthy.me.

The app will help us track our progress toward healthy life, we can track calories taken and workout time done in a day. We will achieve this using [reactjs](https://reactjs.org/docs/getting-started.html) (A javascript framework for building user interfaces) additionally our app will be Artificial intelligence powered, users can interact with the app using voice commands, and we will use wit.ai platform. To interact with the wit.ai api we will use nodejs.

### The tech stack
These are the technologies use to build the app.
* [react.js](https://reactjs.org/docs/getting-started.html)
* [Wit.ai](https://wit.ai/)
* [nodejs](https://nodejs.org/en/)
* [Express.js](https://github.com/expressjs/express)
* Sqlite(simple document based database)

We choose react because it is going to make our app more manageable in the future hence making adding features to the app easy not to mention it is very fun to write.
We choose wit.ai platform because
1.It is easy to use
1.It is free

# **Building the app**

### How will it work?
1. Open browser and go to the url of the app
2. Use the audio or text input to enter your progress. Eg: “Burned 100 calories today”
3. App will understand your intent and track your progress 

Here is the app working in action

 ![Working app demo](image.jpg)

 

Application Logic flow figure(mind map)
 
 ![Application Logic](image.jpg)

 

# Prerequisites 
1. Node js
2. reactjs
3. wit.ai account
Now let’s see how are we going to approach building the app 

# 1. Installation and set up

Installing node js
Go to nodejs.org and download the exe , and follow the instructions
Wit.ai
Go to wit.ai website and create free account 
Create basic react project


# 2. Building the frontend
Project setup
We are going to use [create-react-app](https://create-react-app.dev/docs/getting-started/) to scaffold our basic react app, it will give us folder structure with everything setup.
Run the following commands.
```
npx create-react-app healthyme
cd healthyme
npm start
````
you should be able to see the basic react page at [http://localhost:3000](http://localhost:3000 )


 


# 3. Building the Backend
Now we have our frontend working we need an api to talk to wit.ai api. For that we are going to use simple node.js api.
Project setup
`
npm init
` 
Fill the required info
Next let’s install Exapress.js, Express is a minimalistic HTTP server for nodejs.
```
npm install –save express
npm install –save bpdy-parser
npm install –save cors
npm install sqlite3
```

Here are the the api endpoints that we are going to create.
```
POST /api/foodEntry
PUT /api/foodEntry/{foodEntryId}
GET /api/foodEntry
GET /api/ foodEntry/{foodEntryId }
DELETE /api/ foodEntry/{foodEntryId }
```
```
For workout
POST /api/workout
PUT /api/workout/{workoutId}
GET /api/workout
GET /api/ workout/{workoutId }
DELETE /api/ workout/{workoutId }
GET /api/calorieCount
```

# 4. Integration with wit.ai



# 5. Deployment


Deployment to heroku and netlify
Deployment to heroku
Create a free heroku aaccount if you don’t already have one, thr free and hobby plan is free.
These are the steps we follow to deploy our app.
1. install heroku cli
2. run heroku login and follow the instructions
3. 
4. run git remote –v to check if heroku remotewas added, if not run git remote add heroku https://git.heroku.com/<heroku-project-name>.git
5. 
6. 
7.
8. commit your code git add . && git commit –m “add heroku deploy configuration”
9. Push everything to heroku using heroku git push heroku maser
10. voaila 
Once you finished the last step you can head to the heroku dashboard and you will find project’s url.
Deployment to Netlify
Netlify is mainly a hosting service for static sites, we will use it to host our react application.
To deploy to netlify follow the following steps.
1.  Go to netlify.com
2. click new site from git
3. search the healthyme repository
4. Add build command 
5. click deploy site
6. vola we have link of live app 

# Summary 



What’s next?
You can extend this app by doing the following 
-	Add more intents on wit.ai
-	Add more feature
-	Making you training data more rich

Resources For extending your knowledge



