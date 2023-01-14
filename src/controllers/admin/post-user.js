export default function buildPostUser({ addUser }) {
    return async function (httpRequest) {
        const userData = httpRequest.body;
        const user = await addUser(userData);
        return {
            statusCode: 201,
            body: { user },
        };
    };
}
