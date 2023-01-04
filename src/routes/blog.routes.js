import { Router } from "express";
import requestHandler from "../utils/requestHandler.js";
import visitorsBlogController from "../controllers/blogs/index.js";

const router = Router();

router.get("/", requestHandler(visitorsBlogController.getBlogs));
router.get("/:id", requestHandler(visitorsBlogController.getOneBlog));

export default router;
