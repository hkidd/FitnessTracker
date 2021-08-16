const express = require("express");
const path = require("path");
const router = require("express").Router();

// No pages are currently loading on link clicks
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "/exercise.html"));
});

router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "/stats.html"));
});

module.exports = router;