import userServices from "../../../use-cases/users/userServices.js";
import buildPostUser from "./post-user.js";
import buildGetUsers from "./get-users.js";

const { listUsers, addUser } = userServices;

const postUser = buildPostUser({ addUser });
const getUsers = buildGetUsers({ listUsers });

const adminUserSubController = {
    getUsers,
    postUser,
};

export default adminUserSubController;
