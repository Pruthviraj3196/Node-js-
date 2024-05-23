const express = require("express");
const app = express();
const jobRoutes = require("./routes/jobs")
const mongoose = require("mongoose");

let port = 8080;

// jason passing mildlware

app.use(express.json());


// making connection with mongoDB
mongoose
.connect("mongodb://localhost:27017/jobapp")
.then(() => console.log("Connrction with Data Base is Established Sucessfully"))
.catch((err) => console.log("Error with Connection with DataBAse", err));

// api routes

app.use(jobRoutes);


app.listen(port, () => {
    console.log(`listening to the port: ${port}`);
});