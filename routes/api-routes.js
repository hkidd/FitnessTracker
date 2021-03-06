const Workout = require("../models/Workout.js");
const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const router = require("express").Router();

// route to get all workouts, along with aggregating the total exercise duration
router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((workoutsdb) => {
      res.json(workoutsdb);
    })
    .catch((err) => {
      res.json(err);
    });
});

// route to create new workout using request body
router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then((workoutsdb) => {
      res.json(workoutsdb);
    })
    .catch((err) => {
      res.json(err);
    });
});

// route to add exercises to a workout based on its id
router.put("/api/workouts/:id", ({ params, body }, res) => {
  Workout.findOneAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true }
  )
    .then((workoutsdb) => {
      res.json(workoutsdb);
    })
    .catch((err) => {
      res.json(err);
    });
});

// route for workouts in range (last 7 days), along with the aggregate exercise duration
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((workoutsdb) => {
      console.log(workoutsdb);
      res.json(workoutsdb);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
