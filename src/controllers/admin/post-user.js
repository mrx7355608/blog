export default function buildPostUser({ addUser }) {
    return async function (httpRequest) {
        try {
            const userData = httpRequest.body;
            const user = await addUser(userData);
            return {
                statusCode: 201,
                body: { user },
            };
        } catch (err) {
            return {
                statusCode: 400,
                body: { error: err.message },
            };
        }
    };
}
