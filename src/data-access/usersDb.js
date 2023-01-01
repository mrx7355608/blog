export default function buildUsersDb({ UserModel }) {
    return {
        insert,
        findAll,
        findById,
        findByEmail,
    };

    async function insert(userData) {
        // userData = { name: "", email: "", password: hashedPassword }
        return await UserModel.create(userData);
    }
    async function findAll() {
        return await UserModel.find({});
    }
    async function findById(id) {
        return await UserModel.findById(id);
    }
    async function findByEmail(email) {
        return await UserModel.findOne({ email });
    }
}
