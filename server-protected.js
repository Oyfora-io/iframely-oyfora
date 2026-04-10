// server-protected.js
import express from "express";
import iframely from "./server.js"; // or wherever server is exported

const app = express();

app.use((req, res, next) => {
  const key = req.query.key;

  if (key !== process.env.IFRAMELY_SECRET) {
    return res.status(403).json({ error: "Forbidden" });
  }

  next();
});

// mount iframely after auth
app.use("/", iframely);

const PORT = process.env.PORT || 8061;
app.listen(PORT, () => {
  console.log("Protected Iframely running");
});
