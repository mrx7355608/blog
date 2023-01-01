import makeBlog from "./buildBlogEntity.js";

const data = {
    title: "JSON Web Tokens VS Sessions. Which one to use for authentication?",
    body: "Lets discuss about authentication and authorization with JWT vs Sessions...",
    tags: ["Discussion", "Security"],
    published: false,
};

describe("Testing blog title", () => {
    it("returns error when title is null", () => {
        expect(() => makeBlog({ ...data, title: null })).toThrow(
            "Blog title is required!"
        );
    });
    it("returns error when title is shorter than required", () => {
        expect(() => makeBlog({ ...data, title: "small" })).toThrow(
            "Title should be 8 characters long at least"
        );
    });
    it("sanitizes title", () => {
        const blog = makeBlog({
            ...data,
            title: "This is a title<script>alert('you are hacked!')</script>",
        });
        expect(blog.getTitle()).toBe("This is a title");
    });
});

describe("Testing blog body", () => {
    it("returns error when no body is provided", () => {
        expect(() => makeBlog({ ...data, body: "" })).toThrow(
            "Blog body is required!"
        );
    });
});

describe("Testing blog tags", () => {
    it("returns error when tags are not provided", () => {
        expect(() => makeBlog({ ...data, tags: "" })).toThrow(
            "Cannot create a blog without tags"
        );
    });
    it("converts a single tag string in to an array", () => {
        // "docker" => ["docker"]
        const blog = makeBlog({ ...data, tags: "Docker" });
        expect(blog.getTags()).toStrictEqual(
            expect.arrayContaining(["docker"])
        );
    });
    it("returns error when enough tags are not provided", () => {
        expect(() => makeBlog({ ...data, tags: [""] })).toThrow(
            "Add one tag at least"
        );
    });
    it("Sanitizes null tag values", () => {
        const blog = makeBlog({ ...data, tags: [null, "linux"] });
        expect(blog.getTags()).toEqual(expect.arrayContaining(["linux"]));
    });
    it("Converts number tag values into strings", () => {
        const blog = makeBlog({ ...data, tags: [12345, "linux"] });
        expect(blog.getTags()).toEqual(
            expect.arrayContaining(["12345", "linux"])
        );
    });
});