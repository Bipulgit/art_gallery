const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const Registration = require("./models/registers");
const Order = require("./models/ordernew");
const hbs = require("hbs");
const { json } = require("express");
const { ppid } = require("process");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/index", (req, res) => {
  res.render("index");
});
//Register
app.get("/login", (req, res) => {
  res.render("login");
});
//Login
app.get("/signin", (req, res) => {
  res.render("signin");
});

app.get("/painting", (req, res) => {
  res.render("painting");
});

app.get("/architecture", (req, res) => {
  res.render("architecture");
});

app.get("/cinema", (req, res) => {
  res.render("cinema");
});

app.get("/Literature", (req, res) => {
  res.render("Literature");
});

app.get("/Sculpture", (req, res) => {
  res.render("Sculpture");
});

app.get("/music", (req, res) => {
  res.render("music");
});

app.get("/payment", (req, res) => {
  res.render("payment");
});

app.post("/login", async (req, res) => {
  try {
    const registerdoctor = new Registration({
      email: req.body.email,
      password: req.body.password,
    });
    const registered = await registerdoctor.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/payment", async (req, res) => {
  try {
    const ordernew = new Order({
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      mobile: req.body.mobile,
    });
    const registered = await ordernew.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/payment", async (req, res) => {
  try {
    console.log(req.body.email);
    res.send(req.body, email);
  } catch (error) {
    res.status(400).send(error);
  }
});


app.get("/register", async (req, res) => {
  try {
    console.log(req.body.email);
    res.send(req.body, email);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Signin Validation
app.post("/signin", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const useremail = await Registration.findOne({ email: email });
    if (useremail.password === password) {
      res.status(201).render("index");
    } else {
      res.send("Wrong Password");
    }
  } catch (error) {
    res.status(400).send("Invalid Email");
  }
});

app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});
