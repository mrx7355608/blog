export default function buildListUsers({ usersDb }) {
    return async function () {
        return await usersDb.findAll();
    };
}
