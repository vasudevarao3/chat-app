import express, { json } from "express";
import cors from "cors";
import { default as axios } from "axios";
import path from 'path'

const app = express();

app.use(json());
app.use(cors({ origin: true }));

const __dirname = path.resolve();

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

app.use(express.static(path.join(__dirname, '/vite-project/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'vite-project', 'dist', 'index.html'));
});

app.listen(3001); 