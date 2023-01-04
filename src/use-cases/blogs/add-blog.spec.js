import "dotenv/config";
import buildAddBlogs from "./add-blog.js";
import buildBlogsDb from "../../data-access/blogsDb.js";

import appConfig from "../../../config/appConfig.js";
import { connectToDatabase, disconnectFromDatabase } from "../../../db/db.js";
const blogsDb = buildBlogsDb();
const addBlog = buildAddBlogs({ blogsDb });

describe("Add Blog", () => {
    beforeAll(async () => {
        await connectToDatabase(appConfig.databaseUrl);
    });
    afterAll(() => disconnectFromDatabase());

    it("throws error when data is not provided", async () => {
        try {
            await addBlog(null);
        } catch (err) {
            expect(err.message).toBe("Blog data is missing");
        }
    });

    it.skip("creates a blog when valid data is provided", async () => {
        const fakeBlog = await addBlog({
            title: "Fake Blog - 2",
            tags: "Discussion",
            body: "<h1>helo</h1>",
            published: true,
        });
        expect(fakeBlog.title).toBe("Fake Blog - 2");
        expect(fakeBlog.tags).toEqual(["discussion"]);
        expect(fakeBlog.body).toBe("<h1>helo</h1>");
        expect(fakeBlog.published).toBe(true);
    });
});
