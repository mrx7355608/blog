import "dotenv/config";
import app from "./app.js";
import config from "../config/index.js";
import { connectToDatabase } from "../db/db.js";

const { port } = config;

async function startApplication() {
    await connectToDatabase(config.databaseUrl);
    app.listen(port, () => {
        console.log("express application started on port", port);
    });
}

startApplication();
