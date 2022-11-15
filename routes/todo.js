const todo = require("express").Router();

todo.route("/todo").get((req, res) => {
    res.send("Hello from todo get request");
});

todo.route("/todo").post((req, res) => {
    console.log(req.body);
    res.send("Hello from todo post request");
});

todo.route("/todo").delete((req, res) => {
    res.send("This massage was deleted");
});

todo.route("/todo").put((req, res) => {
    res.send("This massage is put");
});
todo.route("/todo").patch((req, res) => {
    res.send("This massage is patch");
});

module.exports = todo; 