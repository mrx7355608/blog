import mongoose from "mongoose";

export function connectToDatabase(database_url) {
    mongoose.connect(database_url);
    mongoose.connection.on("error", () => {
        console.log("Error in database connection ");
    });
    mongoose.connection.on("connected", () => {
        console.log("Database connected ");
    });
}
