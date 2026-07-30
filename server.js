import express from "express";
import url from "url";
import path from "path";
import { nanoid } from "nanoid";
import connectDB from "./utils/database.js";
import { Url } from "./models/url_shortner_model.js";
await connectDB();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", async (req, res) => {
    const allUrls = await Url.find();
    res.render("index", { allUrls });
});

app.post("/shortUrl", async (req, res) => {
    const originalUrl = req.body.originalUrl;
    if (!originalUrl) {
        return res.status(400).send("Original URL is required");
    }
    await new Url({
        originalUrl,
        shortUrl: nanoid(7),
    }).save();

    res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
    const url = await Url.findOne({
        shortUrl: req.params.shortUrl,
    });
    if (!url) {
        return res.status(404).send("URL not found");
    }
const updated = await Url.findOneAndUpdate(
    { shortUrl: req.params.shortUrl },
    { $inc: { clicks: 1 } },
    { new: true }
);
console.log(updated.clicks);
res.redirect(updated.originalUrl);
});

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});