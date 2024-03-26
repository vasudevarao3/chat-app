const express = require("express");
const cors = require("cors");
const {default: axios} = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "a6439f38-1a15-4659-b4f7-a56a52b031b0"}}
    );
    console.log("r",r);
    return res.status(r.status).json(r.data)
  } catch (error) {
    console.log("Error",error);
    return res.status(error.response).json(error.response);
  }
});

app.listen(3001);