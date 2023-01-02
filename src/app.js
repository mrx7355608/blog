import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import cors from "cors";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
import passport from "passport";
import session from "express-session";
import connectMongoDbSession from "connect-mongodb-session";
import appConfig from "../config/appConfig.js";
import passportSetup from "./utils/passportSetup.js";

// Routers
import blogRouter from "./routes/blog.routes.js";
import adminRouter from "./routes/admin.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(hpp());
app.use(mongoSanitize());
// sessions setup
const MongoStore = connectMongoDbSession(session);
const store = new MongoStore({
    uri: appConfig.databaseUrl,
    collection: "sessions",
});
app.use(
    session({
        name: "sid",
        resave: false,
        saveUninitialized: false,
        secret: appConfig.sessionSecret,
        cookie: {
            maxAge: 24 * 60 * 3600, // 1 day
            httpOnly: true,
        },
        store,
    })
);
app.use(passport.initialize());
app.use(passport.session());
passportSetup(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/42ecf845b32d0587e6c0", adminRouter);

// Catch 404
app.use(function (req, res, next) {
    return next(new Error("Page not found"));
});
// Error handler
app.use(function (err, req, res, next) {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({ error: err.message });
});

export default app;
