import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import cors from "cors";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
// Routers
import blogRouter from "./routes/blog.routes.js";
import adminRouter from "./routes/admin.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(hpp());
app.use(mongoSanitize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/admin/blogs", adminRouter);

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
