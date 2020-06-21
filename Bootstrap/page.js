const express = require("express");
const app = express();
const path = require("path");
const parser = require("body-parser");
const cover_router = require("./routes/cover")
const real_router = require("./routes/real")
const fake_router = require("./routes/fake")
const signup_router = require("./routes/signup_route")
const policy_router = require("./routes/policy_route")
app.use(parser.urlencoded({
    extended: true
}));
// app.set("views", "html");
app.use(express.static(path.join(__dirname, "public")));
app.use("/", cover_router);
app.use("/qwerty", fake_router);
app.use("/admin-orig", real_router);
app.use("/admin-signup", signup_router);
app.use("/policy",policy_router);
console.log(path.join(__dirname));
app.listen(3400);

// express.static(path.join(__dirname, "main_site", "cover"))