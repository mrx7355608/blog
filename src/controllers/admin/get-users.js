export default function buildGetUsers({ listUsers }) {
    return async function () {
        try {
            let users = await listUsers();
            users = users.map((user) => {
                user.password = undefined;
                user.__v = undefined;
                return user;
            });
            return {
                statusCode: 201,
                body: { results: users.length, users },
            };
        } catch (err) {
            return {
                statusCode: 400,
                body: { error: err.message },
            };
        }
    };
}
