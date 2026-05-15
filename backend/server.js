const express = require("express");
const cors = require("cors");
const exploreRoutes = require("./routes/exploreRoutes");
const tourRoutes = require("./routes/tourRoutes");
const tourMoreRoutes = require("./routes/tourMoreRoutes");
const myTripsRoutes = require("./routes/myTripsRoutes");
const nextTripsRoutes = require("./routes/nextTripsRoutes");

// TẮT authRoutes vì không dùng login nữa
// const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Travel backend is running" });
});

app.use("/api/explore", exploreRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/tourMore", tourMoreRoutes);
app.use("/api/my-trips", myTripsRoutes);
app.use("/api/next-trips", nextTripsRoutes);

// app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});