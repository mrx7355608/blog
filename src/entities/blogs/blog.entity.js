export const Blog = ({ sanitize, AppError }) => {
    const validateTitle = (title) => {
        if (!title) {
            throw new AppError(
                "ValidationError",
                "Blog title is required!",
                400
            );
        }
        if (title.length < 8) {
            throw new AppError(
                "ValidationError",
                "Title should be 8 characters long at least",
                400
            );
        }
    };

    const validateBody = (body) => {
        if (!body) {
            throw new AppError(
                "ValidationError",
                "Blog body is required!",
                400
            );
        }
    };

    const validateTags = (tags) => {
        if (!tags) {
            throw new AppError(
                "ValidationError",
                "Cannot create a blog without tags",
                400
            );
        }

        // filter empty/null values
        tags = tags.filter((tag) => (!tag === true ? null : tag));
        if (tags.length < 1) {
            throw new AppError("ValidationError", "Add one tag at least", 400);
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
