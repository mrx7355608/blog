import "dotenv/config";
import buildEditBlogs from "./edit-blog.js";
import AppError from "../../utils/AppError.js";
import buildBlogsDb from "../../data-access/blogsDb.js";

import appConfig from "../../../config/appConfig.js";
import { connectToDatabase, disconnectFromDatabase } from "../../../db/db.js";

const blogsDb = buildBlogsDb();
const editBlog = buildEditBlogs({ blogsDb, AppError });

describe("Edit Blog", () => {
    beforeAll(async () => {
        await connectToDatabase(appConfig.databaseUrl); // Use a test DB url
    });
    afterAll(() => disconnectFromDatabase());

    it("throws error when id is not given", async () => {
        try {
            await editBlog("", {});
        } catch (err) {
            expect(err.message).toBe("Provide blog id to edit that blog");
        }
    });

    it("throws error when invalid id is given", async () => {
        try {
            await editBlog("12345", {});
        } catch (err) {
            expect(err.name).toBe("CastError");
        }
    });

    it("throws error when changes are not given", async () => {
        try {
            await editBlog("63b1d15309a3b31fbc81e3ac", null);
        } catch (err) {
            expect(err.message).toBe("Changes to be made are missing");
        }
    });

    it("throws error when blog does not exists", async () => {
        try {
            await editBlog("63b1d15309a3b31fbc81e3ab", {});
        } catch (err) {
            expect(err.message).toBe(
                "Blog you are trying to edit does not exist"
            );
        }
    });

    it("updates blog", async () => {
        const updatedBlog = await editBlog("63b1d15309a3b31fbc81e3ac", {
            title: "Blog - 1",
        });
        expect(updatedBlog.title).toBe("Blog - 1");
    });
});
