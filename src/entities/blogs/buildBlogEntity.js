import { Blog } from "./blog.entity.js";
import sanitize from "sanitize-html";

const makeBlog = Blog({ sanitize });
export default makeBlog;
