import buildUsersDb from "../../data-access/usersDb.js";
import UserModel from "../../entities/users/user.model.js";
// use cases
import buildAddUser from "./add-user.js";
import buildListUsers from "./list-users.js";

const usersDb = buildUsersDb({ UserModel });

const addUser = buildAddUser({ usersDb });
const listUsers = buildListUsers({ usersDb });

const userServices = {
    listUsers,
    addUser,
};

export default userServices;
