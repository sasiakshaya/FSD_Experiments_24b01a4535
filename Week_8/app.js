const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: "week8secret",
  resave: false,
  saveUninitialized: true
}));

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { username } = req.body;
  req.session.user = username;
  res.cookie("username", username, { maxAge: 60000 });
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  if (!req.session.user) return res.redirect("/");

  res.render("home", {
    user: req.session.user,
    cookie: req.cookies.username
  });
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("username");
    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
