export default function buildBlogEntity({ sanitizeHtml, arrayOfStringsOnly }) {
    return function ({ title, body, tags, published = false } = {}) {
        // Title
        if (!title) {
            throw new Error("Blog's title is missing");
        }
        if (!tags) {
            throw new Error("Cannot create a blog without tags");
        }
        if (!body) {
            throw new Error("Blog body is required!");
        }

        // Sanitize input
        title = sanitizeHtml(title);
        body = sanitizeHtml(body);
        tags = tags.map((tag) => sanitizeHtml(tag));
        tags = tags.filter((tag) => tag !== "");

        if (title.length < 8) {
            throw new Error("Title should be 8 characters long at least");
        }
        if (tags.length < 1) {
            throw new Error("Add one tag at least");
        }
        if (!arrayOfStringsOnly(tags)) {
            throw new Error("Tags should be texts only");
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
