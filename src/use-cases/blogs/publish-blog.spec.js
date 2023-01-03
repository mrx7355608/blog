import "dotenv/config";
import buildPublishBlog from "./publish-blog.js";
import buildBlogsDb from "../../data-access/blogsDb.js";

import appConfig from "../../../config/appConfig.js";
import { connectToDatabase, disconnectFromDatabase } from "../../../db/db.js";

const blogsDb = buildBlogsDb();
const publishBlog = buildPublishBlog({ blogsDb });

describe("Publish Blog", () => {
    beforeAll(async () => {
        await connectToDatabase(appConfig.databaseUrl); // Use a test DB url
    });
    afterAll(() => disconnectFromDatabase());

    it("throws error when id is not given", async () => {
        try {
            await publishBlog("", {});
        } catch (err) {
            expect(err.message).toBe("Provide blog id to publish that blog");
        }
    });

    it("throws error when invalid id is given", async () => {
        try {
            await publishBlog("12345", {});
        } catch (err) {
            expect(err.name).toBe("CastError");
        }
    });

    // it("publishes blog", async () => {
    //     const updatedBlog = await publishBlog("63b1d15309a3b31fbc81e3ac");
    //     expect(updatedBlog.published).toBe(true);
    // });

    it("throws error when blog is already published", async () => {
        try {
            await publishBlog("63b1d15309a3b31fbc81e3ac");
        } catch (err) {
            expect(err.message).toBe("Blog has been published already");
        }
    });

    it("throws error when blog does not exists", async () => {
        try {
            await publishBlog("63b1d15309a3b31fbc81e3ab", {});
        } catch (err) {
            expect(err.message).toBe(
                "Blog you are trying to publish does not exist"
            );
        }
    });
});
