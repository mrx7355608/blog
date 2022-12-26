import { Router } from "express";
import requestHandler from "../utils/requestHandler.js";
import blogControllers from "../controllers/blogs/index.js";

const router = Router();

router.get("/", requestHandler(blogControllers.getBlogs));

export default router;
