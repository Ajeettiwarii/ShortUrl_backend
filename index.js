import { connectDb } from "./data/database.js";
import express from "express";
import URL from "./models/url.js";
import urlRoute from "./routes/url.js";
connectDb();

const app = express();
const PORT = 8001;
app.use(express.json());
app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOne({
    shortId,
  });
 
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`server started at PORT:${PORT}`));
