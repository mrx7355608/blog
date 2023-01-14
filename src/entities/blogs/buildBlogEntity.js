import { Blog } from "./blog.entity.js";
import sanitize from "sanitize-html";
import AppError from "../../utils/AppError.js";

const makeBlog = Blog({ sanitize, AppError });
export default makeBlog;
