export default function buildListBlogs({ blogsDb }) {
    return async function ({ filter, limit, sort, page }) {
        const DEFAULT_PAGE = 1;
        const DEFAULT_SORT = { createdAt: -1 };
        const DEFAULT_LIMIT = 10;

        page = page * 1 || DEFAULT_PAGE;
        limit = limit * 1 || DEFAULT_LIMIT;
        sort = sort === "old" ? { createdAt: 1 } : DEFAULT_SORT;
        const skip = page * limit - limit;

        return await blogsDb.findAll({ filter, limit, sort, skip });
    };
}
