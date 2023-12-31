// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

let obj = {}

app.get("/api/:date", (req, res) => {
  let date_string = req.params.date.replace(" ","-")


  if(!date_string.includes("-")){
    date_string = parseInt(date_string)
  }
  
  obj["unix"] = new Date(date_string).getTime()
  obj["utc"] = new Date(date_string).toUTCString()

  
  if(!obj["unix"] || !obj["utc"] ){
    res.json({ error : "Invalid Date" })
  }
  
  res.json(obj)
})


app.get("/api", (req, res) => {
  obj["unix"] = new Date().getTime()
  obj["utc"] = new Date().toUTCString()
  res.json(obj)
})