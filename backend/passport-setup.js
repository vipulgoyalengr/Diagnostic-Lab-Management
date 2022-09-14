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
    clientID: "976963799012-udv4kadvcn82s5gbubslsqftlafs9m6j.apps.googleusercontent.com",
    clientSecret: "pU5mspEg_jqCTH5wA2dMINH4",
    callbackURL: "http://localhost:2001/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));

passport.use(
  new SpotifyStrategy(
    {
      clientID: '6558356df2b243cc92b959b6a0ed57c2',
      clientSecret: 'aed4437c1f9a4096997529059c9aaa72',
      callbackURL: 'http://localhost:2001/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      console.log(profile)
      // User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
      //   return done(err, user);
      // });
    }
  )
);