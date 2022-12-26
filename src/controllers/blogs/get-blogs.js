export default function buildGetBlogs({ listBlogs }) {
    return async function (httpRequest) {
        const { limit, sort, page } = httpRequest.query;
        const blogs = await listBlogs({ limit, sort, page });
        return {
            statusCode: 200,
            body: blogs,
        };
    };
}
