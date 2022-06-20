import express from "express";
import * as url from "url";
import path from "path";
import jwt from "jsonwebtoken";

const router = express.Router();

const secret_key = "pLdv%Z-zAXq^fYDT*G3kF^UhP8@nJF5$";
const data = [
    {
        id: "ysh038",
        password: "1234",
    },
    {
        id: "ysh031",
        password: "1234",
    },
];

router.get("/", (req, res, next) => {
    //console.log(req.query.id);
});
router.get("/data", (req, res, next) => {
    data.forEach((user) => {
        console.log(user.id);
    });
});
router.get("/:id", (req, res) => {
    data.forEach((user) => {
        if (user.id === req.params.id) {
            console.log(user.id);
        }
    });
});

export default router;
