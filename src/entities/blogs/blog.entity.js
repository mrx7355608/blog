export const Blog = ({ sanitize }) => {
    const validateTitle = (title) => {
        if (!title) {
            throw new Error("Blog title is required!");
        }
        if (title.length < 8) {
            throw new Error("Title should be 8 characters long at least");
        }
    };

    const validateBody = (body) => {
        if (!body) {
            throw new Error("Blog body is required!");
        }
    };

    const validateTags = (tags) => {
        if (!tags) {
            throw new Error("Cannot create a blog without tags");
        }

        // filter empty/null values
        tags = tags.filter((tag) => (!tag === true ? null : tag));
        if (tags.length < 1) {
            throw new Error("Add one tag at least");
        }
    };

    const makeBlog = ({ title, body, tags, published = false } = {}) => {
        // Sanitize input
        title = sanitize(title);
        body = sanitize(body);

        validateTitle(title);
        validateTags(tags);
        validateBody(body);

        return Object.freeze({
            getTitle: () => title,
            getTags: () => tags,
            getBody: () => body,
            isPublished: () => published,
            publish: () => {
                published = true;
            },
            unPublish: () => {
                published = false;
            },
        });
    };

    return makeBlog;
};
