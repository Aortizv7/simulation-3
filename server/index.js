require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    ,passport=require('passport')
    ,Auth0Strategy=require('passport-auth0')
    ,session=require('express-session')
    , app = express()
    , PORT = 8080


app.use(bodyParser.json())
app.use(cors())

// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true
// }))
// app.use(passport.initialize())
// app.use(passport.session());

// massive(process.env.CONNECTION_STRING).then((db)=>{
//     app.set('db',db)
// })

// passport.use(new Auth0Strategy({
//     domain:process.env.AUTH_DOMAIN,
//     clientID:process.env.AUTH_CLIENTID,
//     clientSecret:process.env.AUTH_CLIENT_SECRET,
//     callbackURL:process.env.AUTH_CALLBACK
// },(accessToken,refreshToken,extraParams,profile,done)=>{
//     const db=app.get('db')

// }))

// passport.serializeUser((profile,done)=>{
//     done(null,profile)
// })
// passport.deserializeUser((profile,done)=>{
//     done(null,profile)
// })

//endpoints//

// app.get('/auth/login',passport.authenticate('auth0'))

// app.get('/auth/callback',passport.authenticate('auth0',{
//     sucessRedirect:'https://localhost:3000/dashboard',
//     failureRedirect:'/auth/login'
// }))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));