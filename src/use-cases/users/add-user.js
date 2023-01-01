import makeUser from "../../entities/users/buildUserEntity.js";

export default function buildAddUser({ usersDb }) {
    return async function (userData) {
        if (!userData) {
            throw new Error("Provide necessary data for user");
        }

        const user = makeUser(userData);
        await user.hashPassword();
        return await usersDb.insert({
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
        });
    };
}
