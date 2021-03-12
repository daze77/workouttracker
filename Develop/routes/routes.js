const router = require("express").Router();
const workout = require("../scheema/models.js");

router.post("/api/workouts", ({ body }, res) => {
  workout.create(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



router.put("/api/workouts", ({ body }, res) => {
    workout.create(body)
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });







module.exports = router;