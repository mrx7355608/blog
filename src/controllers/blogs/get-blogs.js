export default function buildGetBlogs({ listBlogs }) {
    return async function (httpRequest) {
        // Filter un-wanted fields from query
        const allowedFields = ["page", "sort", "limit", "title", "tags"];
        Object.keys(httpRequest.query).forEach((q) => {
            if (!allowedFields.includes(q)) delete httpRequest.query[q];
        });

        // Destructure
        const { title, tags, limit, page, sort } = httpRequest.query;

        // Created a filter object
        const filter = {};
        if (title) filter.title = title;
        if (tags) {
            const tagsArr = tags.split(",");
            filter.tags = tagsArr.map((t) => t.toLowerCase());
        }

        // Fetching data from database
        let blogs = await listBlogs({ filter, limit, page, sort });
        // Only return published blogs
        blogs = blogs.filter((blog) => blog.published);

        return {
            statusCode: 200,
            body: blogs,
        };
    };
}
