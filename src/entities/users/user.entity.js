export default function buildUserEntity({
    hash,
    emailValidator,
    sanitize,
    AppError,
}) {
    return function ({ name, email, password }) {
        name = sanitize(name);
        email = sanitize(email);
        password = sanitize(password);

        if (!name) {
            throw new AppError("ValidationError", "Name is required!", 400);
        }
        if (name.length < 4) {
            throw new AppError(
                "ValidationError",
                "Name should be 4 characters long at least",
                400
            );
        }
        if (!email) {
            throw new AppError("ValidationError", "Email is required!", 400);
        }
        if (emailValidator(email) == false) {
            throw new AppError("ValidationError", "Invalid email", 400);
        }
        if (!password) {
            throw new AppError("ValidationError", "Password is required!", 400);
        }
        if (password.length < 10) {
            throw new AppError(
                "ValidationError",
                "Password should be 10 characters long at least",
                400
            );
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
