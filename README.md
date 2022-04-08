# electrojaafar
For new implementation of the code of the app we have to:
*in the packege.json add:
 "data:import": "node backend/seeder",
    "data:destroy": "node backend/seeder -d",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend"
*in the .env add:
NODE_ENV = production
