import buildUserEntity from "./user.entity.js";
import sanitize from "sanitize-html";
import validator from "validator";
import bcryptjs from "bcryptjs";

const makeUser = buildUserEntity({
    sanitize,
    emailValidator: validator.isEmail,
    hash: bcryptjs.hash,
});

export default makeUser;
