import buildUsersDb from "../../data-access/usersDb.js";
// use cases
import buildAddUser from "./add-user.js";
import buildListUsers from "./list-users.js";
import AppError from "../../utils/AppError.js";

const usersDb = buildUsersDb();

const addUser = buildAddUser({ usersDb, AppError });
const listUsers = buildListUsers({ usersDb, AppError });

const userServices = {
    listUsers,
    addUser,
};

export default userServices;
