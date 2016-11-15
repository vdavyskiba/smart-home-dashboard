[![Build Status](https://travis-ci.org/vdavyskiba/smart-home-dashboard.svg?branch=master)](https://travis-ci.org/vdavyskiba/smart-home-dashboard)

Log in with your Nest account. 
You need some Nest devices(emulators is ok) in you Nest Home to see devices data

To Just run app:
- install node/npm
- clone this repo
- go to project dir and open command line
- "npm install --production" (to just run app and skip dev part) - static resources is already bundled in "/dist" folder

For development you need to install next global dependencies:
 
- "npm install typings webpack-dev-server rimraf webpack -g"
- "npm install"
- "typings install"
- "npm run server" to start dev server

- put to .env file your NEST_ID and NEST_SECRET
- open you Nest product page and set "Redirect URI" to you host - "http://localhost:3000/auth/nest/callback"
- "npm run start" to start server
- open http://localhost:3000 in your browser

Resources

- https://angular.io
- http://www.typescriptlang.org
- https://webpack.github.io
- https://github.com/AngularClass/angular2-webpack-starter
- https://www.firebase.com/docs/open-data
- https://developer.nest.com
