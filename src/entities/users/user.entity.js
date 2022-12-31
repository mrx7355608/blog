export default function buildUserEntity({ hash, emailValidator, sanitize }) {
    return function ({ name, email, password }) {
        if (!name) {
            throw new Error("Name is required!");
        }
        name = sanitize(name);
        if (name.length < 4) {
            throw new Error("Name should be 4 characters long at least");
        }

        if (!email) {
            throw new Error("Email is required!");
        }
        email = sanitize(email);
        if (emailValidator(email) == false) {
            throw new Error("Invalid email");
        }

        if (!password) {
            throw new Error("Password is required!");
        }
        password = sanitize(password);
        if (password.length < 10) {
            throw new Error("Password should be 10 characters long at least");
        }

        return Object.freeze({
            getName: () => name,
            getEmail: () => email,
            hashPassword: async () => {
                password = await hash(password, 10);
            },
            getPassword: () => password,
        });
    };
}
