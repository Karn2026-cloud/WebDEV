const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));
app.use("/api/pricing", require("./routes/pricingRoutes"));
app.use("/api/settings", require("./routes/settingRoutes"));
app.use("/api/email", require("./routes/emailRoutes"));
app.use("/api/upload", require("./routes/uploadRoutes"));
app.use("/api/testimonials", require("./routes/testimonialRoutes"));
app.use("/api/content", require("./routes/contentRoutes"));

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Backend Running"
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
