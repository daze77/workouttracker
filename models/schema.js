const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
      day: {type: Date, default: ()=>new Date()},

    exercises: [
        {
            type: String,
            trim: true,
            enum: ['Resistance', 'Cardio'],
            required: "Enter an exercise type",
        },
        {
            name: String,
            trim: true,
            required: "Enter an exercise name"
        },
        {
            duration: Number,
            required: "Enter a duration"

            
        },
        {
            weight: Number,
            required: "Enter the weight"

        },
        {
            reps: Number,
            required: "Enter number of reps"

        },
        {
            sets: Number,
            required: "Enter number of sets"

        },
        {
            distance: Number,
            

        },
    ]   
  }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;