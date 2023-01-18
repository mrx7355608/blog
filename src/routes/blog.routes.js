import { Router } from "express";
import requestHandler from "../utils/requestHandler.js";
import visitorsBlogController from "../controllers/blogs/index.js";
import rateLimiter from "express-rate-limit";

const router = Router();

const limiter = rateLimiter({
    windowMs: 60 * 60 * 1000 * 2,
    max: 30,
    legacyHeaders: false,
    message: { error: "Too many requests, try again later" },
    standardHeaders: false,
});

router.get("/", limiter, requestHandler(visitorsBlogController.getBlogs));
router.get("/:id", limiter, requestHandler(visitorsBlogController.getOneBlog));

export default router;
