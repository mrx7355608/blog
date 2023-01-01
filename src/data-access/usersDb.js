export default function buildUsersDb({ UserModel }) {
    return {
        insert,
        findAll,
    };

    async function insert(userData) {
        // userData = { name: "", email: "", password: hashedPassword }
        return await UserModel.create(userData);
    }
    async function findAll() {
        return await UserModel.find({});
    }
}
