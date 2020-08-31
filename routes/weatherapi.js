var express = require("express");
var router = express.Router();
var weatherData = require("../models/Weatherdata");
router
  .route("/")
  .get((req, res) => {
    weatherData.Weather.find()
      .then((weathers) => {
        res.status(200).send(weathers);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .post((req, res) => {
    var newWeather = new weatherData.Weather(req.body);
    newWeather
      .save()
      .then((weather) => {
        res.status(200).send(weather);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  router.route('/:id')
    .get((req, res) => {
        var id = req.params.id;
        weatherData.Weather.find({ _id: id })
            .then((weathers) => {
                res.status(200).send(weathers)
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    })
    .delete((req, res) => {
        var id = req.params.id;
        weatherData.Weather.findByIdAndDelete({ _id: id })
            .then((weathers) => {
                res.status(200).send(weathers)
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    })

module.exports = router;
