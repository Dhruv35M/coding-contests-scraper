const express = require("express");
const { notification } = require("../controllers/notification.controller");

const router = express.Router();

router.get("/notification", notification);

module.exports = router;
