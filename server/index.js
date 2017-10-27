require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , session = require('express-session')
    , app = express()
    , PORT = 8080;


app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
});

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENTID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, (accessToken, refreshToken, extraParams, profile, done) => {
    const db = app.get('db');
    const userData = profile._json;
    db.find_user([userData.identities[0].user_id])
        .then(user => {
            if (user[0]) {
                return done(null, user[0].id);
            } else {
                db.create_user([
                    userData.name,
                    userData.gender,
                    userData.identities[0].user_id
                ]).then(user => {
                    return done(null, user[0].id);
                })
            }
        });

}))

passport.serializeUser(function (id, done) {
    done(null, id);
    console.log(id);
})
passport.deserializeUser(function (id, done) {
    app.get('db').find_session_user([id]).then(user => {
        return done(null, user[0]);
    })
    // done(null, id); //second param is put on req.user
})

//endpoints//

app.get('/auth/login', passport.authenticate('auth0'))

app.get('/auth/callback', passport.authenticate('auth0', {
    sucessRedirect: 'https://localhost:3000/dashboard',
    failureRedirect: '/auth/login'
}))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));