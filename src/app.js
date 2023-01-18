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
import errorHandler, { catch404 } from "./middlewares/errorHandler.js";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(
    cors({
        origin: appConfig.clientUrl,
        credentials: true,
    })
);
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
app.use(`/api/v1/${appConfig.adminUrl}`, adminRouter);

app.use(catch404); // Catch 404
app.use(errorHandler); // Error handler

export default app;
