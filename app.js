const express = require("express");
const cors = require("cors");
const ScheduledTask = require("./utils/scrapingSchedule");
const router = require("./routes/contests.router");
const notificationRouter = require("./routes/notification.router");
const app = express();

app.use(cors());
app.use("/api/v1", router);
app.use("/api/v2", notificationRouter);
router.use((req, res) => {
  res.status(404).json({ message: "Invalid route" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
