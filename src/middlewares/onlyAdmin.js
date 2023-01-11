export default function (req, res, next) {
    if (req.url === "/login") return next();
    if (req.user && req.user.role === "admin") return next();
    return res.status(401).json({ error: "Un-authorized" });
}
