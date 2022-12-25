export default function buildBlogEntity({ sanitizeHtml, arrayOfStringsOnly }) {
    return function ({ title, body, tags, published = false } = {}) {
        // Title
        if (!title) {
            throw new Error("Blog's title is missing");
        }
        title = sanitizeHtml(title);
        if (title.length < 8) {
            throw new Error();
        }

        // Body
        if (!body) {
            throw new Error("Blog body is required!");
        }

        // Tags
        if (!tags) {
            throw new Error("Cannot create a blog without tags");
        }
        tags = tags.map((tag) => sanitizeHtml(tag));
        if (tags.length < 1) {
            throw new Error();
        }
        if (!arrayOfStringsOnly(tags)) {
            throw new Error();
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
