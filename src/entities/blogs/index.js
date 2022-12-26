import buildBlogEntity from "./blog.js";
import sanitizeHtml from "sanitize-html";

const arrayOfStringsOnly = (array) => {
    return array.every((elem) => typeof elem === "string");
};

const makeBlog = buildBlogEntity({ sanitizeHtml, arrayOfStringsOnly });
export default makeBlog;
