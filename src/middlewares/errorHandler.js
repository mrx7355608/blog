import appConfig from "../../config/appConfig.js";
import AppError from "../utils/AppError.js";

// eslint-disable-next-line no-unused-vars
export default function errorHandler(err, req, res, next) {
    const message = err.message;
    const statusCode = err.statusCode || 500;
    const errName = err.name;
    console.log(errName);

    if (errName === "CastError") {
        return res.status(400).json({ error: "Invalid Id" });
    }
    if (errName === "ValidationError") {
        return res.status(400).json({ error: message });
    }
    if (errName === "BadRequestError") {
        return res.status(400).json({ error: message });
    }
    if (errName === "NotFoundError") {
        return res.status(404).json({ error: message });
    }

    if (appConfig.env === "development") {
        return res
            .status(statusCode)
            .json({ error: message, stack: err.stack });
    }
    return res.status(statusCode).json({ error: "Something went wrong" });
}

export function catch404(req, res, next) {
    return next(new AppError("NotFoundError", "Page not found", 404));
}
