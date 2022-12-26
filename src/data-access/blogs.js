export default function buildBlogsDb({ BlogModel }) {
    const findAll = async ({ limit, sort, skip }) =>
        await BlogModel.find({}).sort(sort).skip(skip).limit(limit);
    const findOne = async (filter) => await BlogModel.findOne(filter);
    const findById = async ({ id }) => await BlogModel.findById(id);
    const insert = async (blog) => await BlogModel.create(blog);
    const update = async (id, changes) =>
        await BlogModel.findByIdAndUpdate(id, changes, { new: true });
    const remove = async ({ id }) => await BlogModel.findByIdAndDelete(id);
    return {
        findAll,
        findOne,
        findById,
        insert,
        update,
        remove,
    };
}
