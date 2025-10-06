const mongoose = require("mongoose");
const dbURI = "mongodb://localhost:27017/PAW2";

mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on("error", (err) => {
    console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on("disconnected", () => {
    console.log('Mongoose disconnected');
});