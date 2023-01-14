import BlogModel from "../entities/blogs/blog.model.js";

export default function buildBlogsDb() {
    const findAll = async ({ filter, limit, sort, skip }) => {
        let query = BlogModel.find();
        if (filter.title) {
            query = query.where({
                title: { $regex: new RegExp(filter.title, "i") },
            });
        }
        if (filter.tags && !filter.tags.length < 1) {
            query = query.where({ tags: { $all: filter.tags } });
        }

        return await query.sort(sort).skip(skip).limit(limit);
    };
    const findOne = async (filter) => await BlogModel.findOne(filter);
    const findById = async (id) => await BlogModel.findById(id);
    const insert = async (blog) => await BlogModel.create(blog);
    const update = async (id, changes) =>
        await BlogModel.findByIdAndUpdate(id, changes, { new: true });
    const remove = async (id) => await BlogModel.findByIdAndDelete(id);

    const stats = async () => {
        // Returns total num of published and un-published blogs.
        const blogStats = await BlogModel.aggregate([
            { $match: {} },
            { $group: { _id: "$published", total: { $count: {} } } },
            { $project: { published: "$_id", _id: 0, total: 1 } },
        ]);
        return blogStats;
    };

    return {
        findAll,
        findOne,
        findById,
        insert,
        update,
        remove,
        stats,
    };
}
