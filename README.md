# electrojaafar

Usage
ES Modules in Node
We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

Env Variables
Create a .env file in then root and add the following

NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
Install Dependencies (frontend & backend)
npm install
cd frontend
npm install
Run
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
Build & Deploy
# Create frontend prod build
cd frontend
npm run build
There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

Seed Database
You can use the following commands to seed the database with some sample users and products as well as destroy all data

# Import data
npm run data:import

# Destroy data
npm run data:destroy
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456




For new implementation of the code of the app we have to:
*in the packege.json add:
 "data:import": "node backend/seeder",
    "data:destroy": "node backend/seeder -d",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend"
*in the .env add:
NODE_ENV = development
