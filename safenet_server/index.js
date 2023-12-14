import express from "express";
import loginRouter from "./routes/login.js";
import registerRouter from "./routes/register.js";
import mongoDBConnection from "./mongo.js";

const app = express();

// Connect MongoDB
mongoDBConnection().then((_) => {
  console.log("Mongo DB connected!");
});

// Routes
app.use("/login", loginRouter);
app.use("/register", registerRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Server Listen
app.listen(3001, () => {
  console.log("server is running on port 3001");
});
