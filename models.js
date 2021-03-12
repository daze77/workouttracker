const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workout = new Schema({
  workouttype: {
    enum: ["resistance", "cardio"],
    description: "Please select one of the options."
  },
  cardioForm: {
    enum: ["running", "jogging"],
    description: "Please select one of the options."
  },
  resistanceForm: {
    enum: ["Bicep Curl", "Lateral Pull", "Push Press", "Bench Press", "Quad Press", "Military Press"],
    description: "Please select one of the options."
  },
  cardioName: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  name: {
    type: Number,
    required: "Enter an amount"
  },
  weight: {
    type: Number,
    required: "Enter weight"
  },
  sets: {
    type: Number,
    required: "Enter number of sets"
  },
  reps: {
    type: Number,
    required: "Enter number of reps"
  },
  duration: {
    type: Number,
    required: "Enter the number of minutes (no hours)"
  },
  resistance: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  distance: {
    type: Number,
    required: "Enter an kilometers"
  },
  completed: {
    type: Date,
    default: Date.now
  },
  add: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  toast: {
    type: Number,
    required: "Enter an amount"
  },
  newWorkout: {
    type: Date,
    default: Date.now
  }
});

const workout = mongoose.model("workout", models);

module.exports = models;
