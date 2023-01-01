export default function buildGetUsers({ listUsers }) {
    return async function () {
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
    };
}
