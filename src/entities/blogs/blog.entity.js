export default function buildBlogEntity({ sanitizeHtml, arrayOfStringsOnly }) {
    return function ({ title, body, tags, published = false } = {}) {
        // Title
        if (!title) {
            throw new Error("Blog title is required!");
        }
        title = sanitizeHtml(title);
        if (title.length < 8) {
            throw new Error("Title should be 8 characters long at least");
        }

        // Tags
        if (!tags) {
            throw new Error("Cannot create a blog without tags");
        }
        if (typeof tags === "string") {
            tags = [tags];
        }

        // Sanitize and convert tag to lower case
        tags = tags.map((tag) => {
            tag = sanitizeHtml(tag);
            return tag.toLowerCase();
        });
        tags = tags.filter((tag) => tag !== ""); // Filter empty tags

        if (tags.length < 1) {
            throw new Error("Add one tag at least");
        }
        if (!arrayOfStringsOnly(tags)) {
            throw new Error("Tags should be texts only");
        }

        // Body
        if (!body) {
            throw new Error("Blog body is required!");
        }
        body = sanitizeHtml(body);

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
