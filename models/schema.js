const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
      day: {type: Date, default: ()=>new Date()},

    exercises: [
        {
            type: String,
            trim: true,
            required: "Enter an exercise type",
        },
        {
            name: String,
            trim: true,
            require: "Enter an exercise name"
        },
        {
            duration: Number,
            
        },
        {
            weight: Number,
        },
        {
            reps: Number,
        },
        {
            sets: Number,
        },
        {
            distance: Number,
        },
    ]   
  }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;