import { Strategy } from "passport-local";
import UserModel from "../entities/users/user.model.js";
import bcrypt from "bcryptjs";
import buildUsersDb from "../data-access/usersDb.js";

const usersDb = buildUsersDb({ UserModel });

export default function (passport) {
    passport.use(
        new Strategy({ usernameField: "email" }, async function (
            email,
            password,
            done
        ) {
            if (!email || !password) {
                return done(null, false, { message: "Missing creds" });
            }

            const user = await usersDb.findByEmail(email);
            if (!user) {
                return done(null, false, { message: "user not found" });
            }

            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                return done(null, false, { message: "invalid creds" });
            }

            return done(null, user);
        })
    );

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(async function (id, done) {
        try {
            const user = await usersDb.findById(id);
            done(null, user);
        } catch (err) {
            done(err, false);
        }
    });
}
