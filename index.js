const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
const app = express();
const jwt = require("express-jwt");
const expressJwt = require;
const cors = require("cors");
require("dotenv").config();

mongoose.connect(`${process.env.MONGO_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cookieParser());

app.use(
  jwt({
    secret: `${process.env.AUTH_SECRET}`,
    getToken: (req) => req.cookies.token,
    algorithms: ["HS256"],
  }).unless({
    path: [
      {
        url: "/",
        methods: ["GET"],
      },
      {
        url: "/breakfast",
        methods: ["GET"],
      },
      {
        url: "/brunch",
        methods: ["GET"],
      },
      {
        url: "/lunch",
        methods: ["GET"],
      },
      {
        url: "/dinner",
        methods: ["GET"],
      },
      {
        url: "/recipe",
        methods: ["GET"],
      },
      {
        url: "/register",
        methods: ["POST"],
      },
      {
        url: "/login",
        methods: ["POST"],
      },
      {
        url: "/latest",
        methods: ["GET"],
      },
      {
        url: "/popular",
        methods: ["GET"],
      },
    ],
  })
);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);

module.exports = app;
