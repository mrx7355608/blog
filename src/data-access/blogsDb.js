export default function buildBlogsDb({ BlogModel }) {
    const findAll = async ({ filter, limit, sort, skip }) => {
        let query = BlogModel.find({ published: true });
        if (filter.title) {
            query = query.where({
                title: { $regex: new RegExp(filter.title, "i") },
            });
        }
        if (filter.tags) {
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

    return {
        findAll,
        findOne,
        findById,
        insert,
        update,
        remove,
    };
}
