import express from "express";
import * as url from "url";
import path from "path";
import jwt from "jsonwebtoken";
import loginRouter from "./router/router.js";
import bodyParser from "body-parser";
import cors from "cors";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();
const secret_key = "pLdv%Z-zAXq^fYDT*G3kF^UhP8@nJF5$";
//const jwt = require("jsonwebtoken"); es6

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

const token = jwt.sign(
    {
        id: "ysh038",
        idAdmin: true,
    },
    secret_key
    // {
    //     expiresIn: 2,
    // }
);

jwt.verify(token, secret_key, (error, decoded) => {
    console.log(error, decoded);
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("/", (req, res) => res.render("index.html"));
app.use("/login", loginRouter);

app.post("/text", (req, res, next) => {
    const text1 = req.body.text;
    console.log(text1);
    const sendText = {
        text: "success",
    };
    res.send(sendText);
});

app.listen(3001, () => {
    console.log("Listening on http://localhost:3001");
});
