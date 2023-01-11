export default function (req, res, next) {
    if (req.url === "/login") return next();
    if (req.user && req.user.role === "admin") return next();
    return res.status(400).json({ error: "Un-authorized" });
}
