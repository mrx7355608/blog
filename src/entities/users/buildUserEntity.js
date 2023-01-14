import buildUserEntity from "./user.entity.js";
import sanitize from "sanitize-html";
import validator from "validator";
import bcryptjs from "bcryptjs";
import AppError from "../../utils/AppError.js";

const makeUser = buildUserEntity({
    sanitize,
    emailValidator: validator.isEmail,
    hash: bcryptjs.hash,
    AppError,
});

export default makeUser;
