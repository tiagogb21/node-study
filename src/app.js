import "dotenv/config";

import express from "express";

export const app = express();

app.get("/", function (req, res) {
    return res.status(200).json({ message: "working" });
});
