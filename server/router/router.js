import express from "express";
import * as url from "url";
import path from "path";
import jwt from "jsonwebtoken";
import e from "express";

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
    res.send({ test: "hi" });
});
// router.get("/", (req, res, next) => {
//     const user_id = req.query.id;
//     if (user_id) {
//         data.forEach((a) => {
//             if (a.id === user_id) {
//                 res.status(200).json(a);
//             } else {
//                 res.status(404).json({ message: "not found" });
//             }
//         });
//     } else {
//         const datas = [];
//         data.forEach((a) => {
//             datas.push(a);
//         });
//         res.status(200).json(data);
//     }
// });

// router.post("/post", (req, res, next) => {
//     data.push(req.body);
//     res.status(201).json(data);
// });

// router.get("/:id", (req, res) => {
//     data.forEach((user) => {
//         if (user.id === req.params.id) {
//             console.log(user.id);
//         }
//     });
// });
export default router;
