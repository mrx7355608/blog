import { Router } from "express";
import requestHandler from "../utils/requestHandler.js";
import adminController from "../controllers/admin/index.js";
import passport from "passport";
import rateLimiter from "express-rate-limit";
import onlyAdmin from "../middlewares/onlyAdmin.js";

const router = Router();
const limiter = rateLimiter({
    windowMs: 60 * 60 * 1000 * 2,
    max: 30,
    legacyHeaders: false,
    message: { error: "Too many requests, try again later" },
    standardHeaders: false,
});
const adminLoginLimiter = rateLimiter({
    windowMs: 60 * 60 * 1000,
    max: 5,
    legacyHeaders: false,
    message: { error: "Too many failed login attempts, try again later" },
    standardHeaders: false,
});

// Only allow authenticated requests
router.use(onlyAdmin);

router.get("/", function (req, res) {
    req.user.password = undefined;
    req.user.__v = undefined;
    return res.status(200).json({ user: req.user });
});

// Blogs
router.get("/stats", limiter, requestHandler(adminController.getBlogStats));
router.get("/blogs/", limiter, requestHandler(adminController.getBlogs));
router.get("/blogs/:id", limiter, requestHandler(adminController.getOneBlog));
router.post("/blogs/", limiter, requestHandler(adminController.createBlog));
router.patch(
    "/blogs/update/:id",
    limiter,
    requestHandler(adminController.patchBlog)
);
router.patch(
    "/blogs/publish/:id",
    limiter,
    requestHandler(adminController.patchPublishBlog)
);
router.patch(
    "/blogs/un-publish/:id",
    limiter,
    requestHandler(adminController.patchUnPublishBlog)
);

// Users
router.get("/users", limiter, requestHandler(adminController.getUsers));

// Auth
router.post("/login", adminLoginLimiter, function (req, res, next) {
    passport.authenticate("local", function (err, user, info) {
        if (err) return next(err);
        if (info) return res.status(400).json({ error: info.message });
        req.logIn(user, function (err) {
            if (err) return next(err);
            return res.status(200).json({ login: true });
        });
    })(req, res, next);
});

export default router;
