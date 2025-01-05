const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRouter = require("./src/Route/userRoute");
//Config .env
dotenv.config();

//Config body parser
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Config connect to mongoose
mongoose.connect(process.env.DB_URL).then(() => {
  console.log("kết nối ok");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

///API
app.use("/api/v1/user", userRouter);
