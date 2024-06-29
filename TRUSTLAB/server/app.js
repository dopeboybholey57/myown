require("dotenv").config();

const express = require("express");

const app = express();

const cors = require("cors");

const PORT = 6005;

const session = require("express-session");

const passport = require("passport")

const OAuth2Stategy = require("passport-google-oauth2").Strategy;



const userdb = require("./model/userSchema")

require("./db/conn")

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(express.json());

// Setup Session

app.use(session({
    secret: "9550305134bB",
    resave: false,
    saveUninitialized: true
}))


// Setup Passport

app.use(passport.initialize());
app.use(passport.session());

//  "/auth/google/callbackdoctor" "/auth/google/callbackcorporate"

passport.use(
    new OAuth2Stategy({

        callbackURL: "/auth/google/callback",
callbackURL:"/auth/google/callbackdoctor",
callbackURL:"/auth/google/callbackcorporate",
        scope: ["profile", "email"]
    },
        async (accessToken, refreshToken, profile, done) => {
            console.log("profile", profile)
            try {
                let user = await userdb.findOne({ googleId: profile.id });

                if (!user) {
                    user = new userdb({
                        googleId: profile.id,
                        displayName: profile.displayName,
                        email: profile.emails[0].value,
                        image: profile.photos[0].value
                    });

                    await user.save();
                }

                return done(null, user)
            } catch (error) {
                return done(error, null)
            }
        }
    )
)

passport.serializeUser((user, done)=>{
    done(null,user);
})

passport.deserializeUser((user, done)=>{
    done(null,user);
})

// Initialising Google OAuth Login

app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:3000",
    failureRedirect:"http://localhost:3000"
}))

app.get("/auth/google/callbackdoctor",passport.authenticate("google",{
    successRedirect:"http://localhost:3000",
    failureRedirect:"http://localhost:3000"
}))

app.get("/auth/google/callbackcorporate",passport.authenticate("google",{
    successRedirect:"http://localhost:3000",
    failureRedirect:"http://localhost:3000"
}))

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})