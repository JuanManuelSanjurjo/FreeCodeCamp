const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require('dotenv').config()

const MONGO_URI = process.env['MONGO_URI']
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

let excerciseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  date: String,
})

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  log: [excerciseSchema]
})

let Exercise = mongoose.model("Exercise", excerciseSchema)
let User = mongoose.model("User", userSchema)


app.post("/api/users", (req, res) => {
  let newUser = new User({ username: req.body.username })

  newUser.save()
    .then(savedUser => {
      res.json(savedUser);
    })
    .catch(error => {
      console.log('something went wrong')
    });

})

app.get("/api/users", (req, res) => {
  let users = User.find()
    .then(users => res.send(users))
    .catch(err => console.log(err))
})


app.post("/api/users/:_id/exercises", (req, res) => {
  let newExercise = new Exercise({
    description: req.body.description,
    duration: parseInt(req.body.duration),
    date: new Date(req.body.date)
  })
  
  if (newExercise.date == "" || newExercise.date == "Invalid Date") {
    newExercise.date = new Date().toDateString()
  } else {
    newExercise.date = new Date(req.body.date).toDateString()
  }

  User.findByIdAndUpdate(req.params._id, { $push: { log: newExercise } }, { new: true })
    .then(updatedUser => {
      let obj = {}
      obj["_id"] = updatedUser.id
      obj["username"] = updatedUser.username
      obj["description"] = newExercise.description
      obj["duration"] = newExercise.duration
      obj["date"] = newExercise.date
      res.json(obj)

    }).catch(error => {
      console.log('something went wrong')
    })
})


app.get("/api/users/:_id/logs", (req, res) => {
  User.findById(req.params._id)
    .then(user => {
      let obj = {}
      obj.username = user.username
      obj._id = user._id
      obj.log = user.log
      obj.count = user.log.length

      if (req.query.from || req.query.to) {

        let from = new Date(0)
        let to = new Date()

        if (req.query.from) { from = new Date(req.query.from) }
        if (req.query.to) { to = new Date(req.query.to) }

        from = from.getTime()
        to = to.getTime()

        obj.log = obj.log.filter(session => {
          let date = new Date(session.date).getTime()
                      // console.log(session.date)
          // console.log(typeof session.date)
          return date >= from && date <= to
        })
      }

      if (req.query.limit) {
        obj.log = obj.log.slice(0, req.query.limit)
      }
      console.log(obj.log)
      console.log(typeof obj.log)
      res.json(obj)
    })
    .catch(err => console.log(err))

})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
