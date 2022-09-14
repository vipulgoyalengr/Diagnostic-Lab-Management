const passport=require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;


// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//   // User.findById(id, function(err, user) {
//     done(err, user);
//   // });
// });

passport.use(new GoogleStrategy({
    clientID: "OAuth_clientID",
    clientSecret: "OAuth_Secret",
    callbackURL: "http://localhost:2001/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));

// passport.use(
//   new SpotifyStrategy(
//     {
//       clientID: 'OAuth_clientID',
//       clientSecret: 'OAuth_Secret',
//       callbackURL: 'http://localhost:2001/spotify/callback'
//     },
//     function(accessToken, refreshToken, expires_in, profile, done) {
//       console.log(profile)
//       // User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
//       //   return done(err, user);
//       // });
    }
  )
);
