import "dotenv/config";
import app from "./app.js";
import config from "../config/index.js";

const { port } = config;

function startApplication() {
    // TODO: connect to database
    app.listen(port, () => {
        console.log("express application started on port", port);
    });
}

startApplication();
