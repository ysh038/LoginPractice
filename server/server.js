import express from "express";
import * as url from "url";
import path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("/", (req, res) => res.render("index.html"));
app.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
});
