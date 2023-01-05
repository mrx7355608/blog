import buildBlogEntity from "./blog.entity.js";
import sanitizeHtml from "sanitize-html";

const makeBlog = buildBlogEntity({ sanitizeHtml });
export default makeBlog;
