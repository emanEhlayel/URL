import { nanoid } from "nanoid";
import Url from "../models/Url.js";

export const shortLink = async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ message: "URL is required" });
  }
  try {
    const shortCode = nanoid(7);
    await Url.create({ originalUrl, shortCode });
    res.json({ code: shortCode });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const redirectLink = async (req, res) => {
  const { code } = req.params;

  try {
    const found = await Url.findOne({ shortCode: code });

    if (found) {
      return res.redirect(found.originalUrl);
    } else {
      res.status(404).json({ message: "URL not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error redirecting" });
  }
};
