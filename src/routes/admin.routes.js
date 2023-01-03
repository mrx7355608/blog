import { Router } from "express";
import requestHandler from "../utils/requestHandler.js";
import adminController from "../controllers/admin/adminController.js";
import passport from "passport";
import rateLimiter from "express-rate-limit";

const router = Router();

const adminLoginLimiter = rateLimiter({
    windowMs: 60 * 60 * 1000,
    max: 5,
    legacyHeaders: false,
    message: "Too many failed login attempts, try again later",
    standardHeaders: false,
});

// Only allow authenticated requests
router.use(function (req, res, next) {
    if (req.url === "/login") return next();
    if (req.user && req.user.role === "admin") return next();
    return res.status(404).json({ error: "Page not found" });
});
// Blogs
router.get("/blogs/", requestHandler(adminController.getBlogs));
router.get("/blogs/:id", requestHandler(adminController.getOneBlog));
router.post("/blogs/", requestHandler(adminController.createBlog));
router.patch("/blogs/update/:id", requestHandler(adminController.patchBlog));
router.patch(
    "/blogs/publish/:id",
    requestHandler(adminController.patchPublishBlog)
);
router.patch(
    "/blogs/un-publish/:id",
    requestHandler(adminController.patchUnPublishBlog)
);

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

// Users
router.get("/users", requestHandler(adminController.getUsers));
router.post("/users", requestHandler(adminController.postUser));

export default router;
