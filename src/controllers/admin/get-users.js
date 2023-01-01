export default function buildGetUsers({ listUsers }) {
    return async function () {
        const users = await listUsers();
        return {
            statusCode: 201,
            body: { results: users.length, users },
        };
    };
}
