const express = require("express");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

//database connection
connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))


//questions route
app.use("/api/questions", require("./routes/questionRoutes"));

//users route
app.use("/api/users", require("./routes/userRoutes"));


//overwrite default express errorHandler 
app.use(errorHandler)

app.listen(PORT, (err) => {
    if(err) {
        console.log(`Error while creating server ${err}`);
    } else {
        console.log(`Server is listening on port ${PORT}`);
    }
})