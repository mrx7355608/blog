import { Router } from "express";
import requestHandler from "../utils/requestHandler.js";
import adminController from "../controllers/admin/adminController.js";

const router = Router();

// blogs route
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

// users
router.get("/users", requestHandler(adminController.getUsers));
router.post("/users", requestHandler(adminController.postUser));

export default router;
