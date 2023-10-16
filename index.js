const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const testRoutes = require('./routes/testRoutes');
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const app = express();

// dotenv.config({path:"./config.env"});
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

const PORT = process.env.PORT 



app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/test",testRoutes);


app.listen(PORT, () => {
    console.log(
      `Server Running in  mode on port no ${PORT}`);
  });








