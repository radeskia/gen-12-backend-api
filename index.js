const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
const app = express();
const jwt = require("express-jwt");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

mongoose.connect(`${process.env.MONGO_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());
app.use(cookieParser());
app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(
  jwt({
    secret: `${process.env.AUTH_SECRET}`,
    getToken: (req) => req.cookies.token,
    algorithms: ["HS256"],
  }).unless({
    path: [
      {
        url: "/api",
        methods: ["GET"],
      },
      {
        url: "/api/breakfast",
        methods: ["GET"],
      },
      {
        url: "/api/brunch",
        methods: ["GET"],
      },
      {
        url: "/api/lunch",
        methods: ["GET"],
      },
      {
        url: "/api/dinner",
        methods: ["GET"],
      },
      {
        url: "/api/recipe",
        methods: ["GET"],
      },
      {
        url: "/api/register",
        methods: ["POST"],
      },
      {
        url: "/api/login",
        methods: ["POST"],
      },      {
        url: "/api/register",
        methods: ["GET"],
      },
      {
        url: "/api/login",
        methods: ["GET"],
      },
      {
        url: "/api/latest",
        methods: ["GET"],
      },
      {
        url: "/api/popular",
        methods: ["GET"],
      },
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
      },      {
        url: "/register",
        methods: ["GET"],
      },
      {
        url: "/login",
        methods: ["GET"],
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

app.use("/", indexRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

module.exports = app;
