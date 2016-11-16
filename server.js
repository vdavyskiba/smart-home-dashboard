var http = require('http');
var https = require('https');
var path = require('path');

var express = require('express');
var gzipStatic = require('connect-gzip-static');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var NestStrategy = require('passport-nest').Strategy;
var session = require('express-session');

//get environment variables
if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

var SUPER_SECRET_KEY = 'secret_key';

var port = process.env.PORT || 3000;

var passportOptions = {
  failureRedirect: '/auth/failure' // Redirect to another page on failure.
};

passport.use(new NestStrategy({
  clientID: process.env.NEST_ID,
  clientSecret: process.env.NEST_SECRET
}));
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

var app = express();

app.use(cookieParser(SUPER_SECRET_KEY));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: SUPER_SECRET_KEY,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/app', function(req, res, next) {
  var token = req.cookies['nest_token'];
  if (!token) {
    return res.redirect('/auth/nest');
  }
  next();
});

app.use('/app', gzipStatic(__dirname + '/dist'));

/**
 * Listen for calls and redirect the user to the Nest OAuth
 * URL with the correct parameters.
 */
app.get('/auth/nest', passport.authenticate('nest', passportOptions));

/**
 * Upon return from the Nest OAuth endpoint, grab the user's
 * accessToken and set a cookie so browser can access it, then
 * return the user back to the root app.
 */
app.get('/auth/nest/callback', passport.authenticate('nest', passportOptions),
  function(req, res) {
    res.cookie('nest_token', req.user.accessToken);
    res.redirect('/');
  });

/**
 * When authentication fails, present the user with
 * an error requesting they try the request again.
 */
app.get('/auth/failure', function(req, res) {
  console.log('Authentication failed. Status code: ' + res.statusCode);
  res.send('Authentication failed. Please try again.');
});

/**
 * When the user requests to log out, deauthorize their token using the Nest
 * deauthorization API then destroy their local session and cookies.
 * See https://goo.gl/f2kfmv for more information.
 */
app.get('/auth/logout', function(req, res) {
  var token = req.cookies['nest_token'];
  if (token) {
    var reqOpts = {
      hostname: 'api.home.nest.com',
      path: '/oauth2/access_tokens/' + token,
      method: 'DELETE'
    };

    https.request(reqOpts, function(revokeRes) {
      console.log('Log out successful.');
      req.session.destroy();
      res.clearCookie('nest_token');
      res.redirect('/');
    }).on('error', function() {
      console.log('An error occurred attempting to revoke token.');
      res.send('Log out failed. Please try again.');
    }).end();
  } else {
    console.log('Not signed in.');
    res.redirect('/');
  }
});


app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/', function(req, res) {
  res.redirect('/app');
});

app.set('port', port);

var server = http.createServer(app);

server.on('listening', function() {
  console.log('Listening...');
});

server.listen(port);

