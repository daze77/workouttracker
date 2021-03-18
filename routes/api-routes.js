const router = require('express').Router();
const Workout = require('../models/schema.js');


router.get("/api/workouts", (req, res) => {
  Workout.aggregate(
    [
      {
          $addFields: {
              totalDuration: {$sum: "$exercises.duration"},
              // totalWeight: {$sum: "$exercises.weight"}
          },

      }
  ]
  )
  .then((dbWorkout) => {
      console.log(`[GET]`, dbWorkout);
      res.json(dbWorkout);
      })
      .catch((err) => {
          res.json(err);
      }
  )
})
  

router.get('/api/workouts/range', (req,res) => {
  Workout.aggregate([
      {
          $addFields: {
              totalDuration: {$sum: "$exercises.duration"},
              totalWeight: {$sum: "$exercises.weight"}
          },

      }
  ])
  .sort({ _id: -1 })
  .limit(7)
  .then((dbWorkout) => {
      console.log(`[SUM]`, dbWorkout);
      res.json(dbWorkout);
      })
      .catch((err) => {
          res.json(err);
      }
  )
})

router.put("/api/workouts/:id", async (req,res) => {
  try{
      const updateWorkout = await Workout.findByIdAndUpdate(
      {_id: req.params.id},
      {$push: { exercises:req.body}});
      res.json(updateWorkout)
  } catch (error) {
      console.log(error);
  }
});



router.post("/api/workouts", ({body}, res) => {
 Workout.create({body})
  .then(dbWorkout => {
      res.json(dbWorkout)
  })
  .catch (error => {
      console.log(error);
  })
});





module.exports = router;