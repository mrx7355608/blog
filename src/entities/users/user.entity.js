export default function buildUserEntity({
    hashPassword,
    emailValidator,
    sanitize,
}) {
    return async function ({ name, email, password }) {
        if (!name) {
            throw new Error("Name is required!");
        }
        if (!email) {
            throw new Error("Email is required!");
        }
        if (!password) {
            throw new Error("Password is required!");
        }

        // Sanitize input
        name = sanitize(name);
        email = sanitize(email);
        password = sanitize(password);

        if (name.length < 4) {
            throw new Error("Name should be 4 characters long at least");
        }
        if (emailValidator(email) == false) {
            throw new Error("Invalid email");
        }
        if (password.length < 10) {
            throw new Error("Password should be 10 characters long at least");
        }

        return Object.freeze({
            getName: () => name,
            getEmail: () => email,
            getHashedPassword: () => hashPassword(password),
        });
    };
}
