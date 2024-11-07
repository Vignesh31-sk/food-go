const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", (req, res) => {
  const newUser = req.body;

  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ message: "Error reading data." });
    }

    let users = [];
    if (data) {
      users = JSON.parse(data);
    }

    users.push(newUser);
    fs.writeFile("data.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).json({ message: "Error saving data." });
      }
      console.log("User details stored");
      res.status(200).json({ message: "User details saved successfully." });
    });
  });
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
