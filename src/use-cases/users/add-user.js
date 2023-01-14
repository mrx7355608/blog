import makeUser from "../../entities/users/buildUserEntity.js";

export default function buildAddUser({ usersDb, AppError }) {
    return async function (userData) {
        if (!userData) {
            throw new AppError(
                "ValidationError",
                "Provide necessary data for user",
                400
            );
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
