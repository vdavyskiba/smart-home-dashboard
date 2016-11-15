[![Build Status](https://travis-ci.org/vdavyskiba/smart-home-dashboard.svg?branch=master)](https://travis-ci.org/vdavyskiba/smart-home-dashboard)

Smart home dashboard web application


Shows connected Nest devices with realtime updates via websocket firebase connection.
Allows two way interaction for some of them.
Requires nest devices and nest account

How to use: 
Go to https://smart-home-dashboard.herokuapp.com/
Log in with Nest account. 
You need some Nest devices(emulators is ok) in you Nest Home to see devices data on dashboard

My public profile https://ua.linkedin.com/in/vitalii-davyskyba-705b9669


Description of the problem and solution:
- implement integration with Nest API
- This project was a test task i completed in March 2016
- i experimented a lot with technologies
- project was not designed to run in Production originally 
- so i did not think much about stuff like tests, logging, proper error handling
- and i would not release solution like this into production because of a lot of unstable dependencies
  

Technical track: Front-end track: 
- back-end is a minimal boilerplate
- html/css - is minimalistic, css framework with a pieces of html used for fast development
- my code is inside "src" dir except (main.ts, custom-typings.d.ts which are boilerplate code)
- other code except "src" is a boilerplate project i used and modified


Reasoning behind your technical choices, including architectural:
- try TypeScript and Angular 2 in production(at that time angular 2 was in beta)
- i tried to ensure good architecture, layers separation etc
- i'm think about Security - app uses https, OAuth2
- code quality is ensured by: 
    - TypeScript static type system
    - static analyzer ESLint with integration to build process
    - some samples of unit and e2e testing
    - Travis CI integration
- chosen framework(Angular) ensures very good scalability

Trade-offs:
- tested only in Google Chrome
- e2e tests broken due to some selenium chrome web driver issue
- e2e and unit testing not finished and code not covered except a few components
- a lot of dependencies makes project unstable. Need to lock versions
- Not fully optimized entire UI and separate component update/re-rendering


To Just run app in production mode:
- install node/npm
- clone this repo
- go to project dir and open command line
- "npm install --production" (to just run app and skip dev part) - static resources is already bundled in "/dist" folder
- "npm run server" to run app


For development you need to install next global dependencies
  -

Install: 
- "npm install typings webpack-dev-server rimraf webpack -g"
- "npm install"
- "typings install"

Configure Nest:
- put to .env file your NEST_ID and NEST_SECRET
- open you Nest product page and set "Redirect URI" to you host - "http://localhost:3000/auth/nest/callback"

Run:
- "npm run start" to start prod server
- "npm run server:dev" to start dev server
-  open http://localhost:3000 in your browser


Resources:
- https://angular.io
- http://www.typescriptlang.org
- https://webpack.github.io
- https://github.com/AngularClass/angular2-webpack-starter
- https://www.firebase.com/docs/open-data
- https://developer.nest.com
