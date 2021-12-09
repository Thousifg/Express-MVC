const express = require("express");

const connect = require("./configs/db");

const port = 2345;
const app = express();
app.use(express.json());

const user = require("./controllers/user.controller");

app.use("/users", user);

const student = require("./controllers/student.controller");

app.use("/student", student);

const evaluation = require("./controllers/evaluation.controller");

app.use("/evaluation", evaluation);

const topic = require("./controllers/topic.controller");

app.use("/topic", topic);

app.listen(port, async () => {
  await connect();
  console.log(`server started at http://localhost:${port}`);
});
