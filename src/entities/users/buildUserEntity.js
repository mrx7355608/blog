import buildUserEntity from "./user.entity.js";
import sanitize from "sanitize-html";
import validator from "validator";
import { hash } from "bcryptjs";

const makeUser = buildUserEntity({
    sanitize,
    emailValidator: validator.isEmail,
    hash,
});

export default makeUser;
