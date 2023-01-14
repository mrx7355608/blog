class AppError extends Error {
    constructor(name, message, statusCode) {
        super(name, message);
        this.name = name;
        this.message = message;
        this.statusCode = statusCode;
        Error.captureStackTrace(this);
    }
}

export default AppError;
