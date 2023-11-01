const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const mySecret = process.env['MONGO_URI']

mongoose.connect(mySecret, { useNewUrlParser: true, useUnifiedTopology: true });

let userSchema = new mongoose.Schema({
  "username": {
    "type": String,
    "required": true
  }
})
let User = mongoose.model('User', userSchema);;

let excerciseSchema = new mongoose.Schema({
  "username": {
    "type": String,
    "required": true
  },
  "description": String,
  "duration": Number,
  "date": String,
})
let Excercise = mongoose.model('Excercise', excerciseSchema);;


let logSchema = new mongoose.Schema({
  "username": {
    "type": String,
    "required": true
  },
  "count": Number,
  "_id": String,
  "log": [{
    "description": String,
    "duration": Number,
    "date": String,
  }]
})

let Log = mongoose.model('Log', logSchema);;



app.post("/api/users", (req, res) => {
  let user = new User({ username: req.body.username })

  user.save()
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
  let date = req.body.date
  if (!date) {
    date = new Date().toDateString()
  }
  
  User.findOne({_id: req.body._id}).then(user => {
    let excercise = new Excercise({username: user.username, description:         req.body.description, duration: parseInt(req.body.duration), date: date })

    
    excercise.save()
      .then(savedEx => {
          let rest = {} 
          rest["username"] = user.username
          rest["_id"] = user._id
          rest["description"] = req.body.description
          rest["duration"] = parseInt(req.body.duration)
          rest["date"] = date
          res.json(rest);
    }).catch( error => {
      console.log('something went wrong')
    })
  
  }).catch(err => console.log(err))


})

app.get("/api/users/:_id/logs", (req, res) =>{
  
  User.findOne({_id: req.params._id})
      .then(user => {
        Excercise.find({username: user.username}).then(exes => {
          let log = {username: user.username, count: exes.length, _id: user.id , log: [exes] }
          res.json(log)
        }                                                      
        ).catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
