const express = require("express");
const cors = require("cors");
const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Path: MERN_Docker_ENV/client/src/App.js
