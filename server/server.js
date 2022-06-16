import express from "express";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();

app.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
});
