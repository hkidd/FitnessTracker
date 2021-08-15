const Workout = require("../models/Workout.js");
const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const router = require("express").Router();

// route to get all workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((workoutsdb) => {
      res.json(workoutsdb);
    })
    .catch((err) => {
      res.json(err);
    });
});

// route to create new workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create({})
    .then((workoutsdb) => {
      res.json(workoutsdb);
    })
    .catch((err) => {
      res.json(err);
    });
});

// route to add exercises
router.put("/api/workouts/:id", ({ params, body }, res) => {
  console.log("PARAMS", body, params);
});

// route for workouts in range?
router.get("/api/workouts/range", (req, res) => {});


module.exports = router;
