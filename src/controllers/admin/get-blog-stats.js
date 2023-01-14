export default function buildGetBlogStats({ listStats }) {
    return async function (httpRequest) {
        const stats = await listStats();
        return {
            statusCode: 200,
            body: stats,
        };
    };
}
