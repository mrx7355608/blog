export default function buildBlogStats({ blogsDb }) {
    return async function () {
        return await blogsDb.stats();
    };
}
