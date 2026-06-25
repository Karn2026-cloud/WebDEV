const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));

app.use(
"/api/projects",
require("./routes/projectRoutes")
);

app.use(
"/api/messages",
require("./routes/messageRoutes")
);

app.use(
"/api/dashboard",
require("./routes/dashboardRoutes")
);
const settingRoutes =
require("./routes/settingRoutes");
const pricingRoutes =
require("./routes/pricingRoutes");

app.use(
"/api/pricing",
pricingRoutes
);
app.use(
  "/api/settings",
  settingRoutes
);
const emailRoutes =
require("./routes/emailRoutes");

app.use(
"/api/email",
emailRoutes
);
app.use(
"/api/upload",
require("./routes/uploadRoutes")
);
app.use("/api/testimonials", require("./routes/testimonialRoutes"));
app.use(
"/api/settings",
require(
"./routes/settingRoutes"
)
);
const contentRoutes =
require("./routes/contentRoutes");

app.use(
"/api/content",
contentRoutes
);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
