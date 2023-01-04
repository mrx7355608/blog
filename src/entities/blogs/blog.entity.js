export default function buildBlogEntity({ sanitizeHtml }) {
    return function ({ title, body, tags, published = false } = {}) {
        // Sanitize data
        title = sanitizeHtml(title);
        body = sanitizeHtml(body);

        if (!title) {
            throw new Error("Blog title is required!");
        }
        if (title.length < 8) {
            throw new Error("Title should be 8 characters long at least");
        }
        if (!body) {
            throw new Error("Blog body is required!");
        }
        if (!tags) {
            throw new Error("Cannot create a blog without tags");
        }
        if (typeof tags === "string") tags = [tags];
        tags = tags.map((tag) => sanitizeHtml(tag));
        tags = tags.filter((tag) => tag !== ""); // Filter empty tags
        tags = tags.map((tag) => tag.toLowerCase()); // Convert to lowercase
        if (tags.length < 1) {
            throw new Error("Add one tag at least");
        }

        return Object.freeze({
            getTitle: () => title,
            getBody: () => body,
            getTags: () => tags,
            isPublished: () => published,
            publish: () => {
                published = true;
            },
            unPublish: () => {
                published = false;
            },
        });
    };
}
