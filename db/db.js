import mongoose from "mongoose";

export async function connectToDatabase(database_url) {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(database_url);
        console.log("Connected to database");
    } catch (err) {
        console.log("[ERROR] There was an interruption in Database connection");
        process.exit(1);
    }
}
