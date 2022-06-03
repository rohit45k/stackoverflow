const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//questions route
app.use("/api/questions", require("./routes/questionRoutes"));


//overwrite default express errorHandler 
app.use(errorHandler)

app.listen(PORT, (err) => {
    if(err) {
        console.log(`Error while creating server ${err}`);
    } else {
        console.log(`Server is listening on port ${PORT}`);
    }
})