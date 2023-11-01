require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser")
const dns = require('dns');

// Basic Configuration
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

let sites = []

function validateURL(url) {
    let flag = false;
   if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(url)) {
      flag = true;
    } 
  return flag;
}

app.post("/api/shorturl/", (req, res) => {
  let obj = {}
  url = req.body.url

  if(validateURL(url)){
    let site = sites.find(item => item.original_url ==  url)
    
    if (site) {
      res.json(site)
      console.log(site)
    } else {
      obj["original_url"] =  url;
      obj["short_url"] = sites.length ;
      sites.push(obj)
      res.json(obj)
        }
  }else{
      res.json({ error: 'invalid url' })
  }
  
    // dns.lookup(url, (err, address, family) => {
    //   if (err) {
    //     res.json({ error: 'invalid url' })
    //   } else {
    //     let site = sites.find(item => item.original_url ==  url)
    //     if (site) {
    //       res.json(site)
    //       console.log(site)
    //     } else {
    //       obj["original_url"] =  url;
    //       obj["short_url"] = sites.length ;
    //       sites.push(obj)
    //       res.json(obj)
    //     }
    //   }
    // })

})

app.get("/api/shorturl/:site", (req, res) => {
  let site = req.params.site
  
  if(sites[site]){
    
    res.redirect(sites[site].original_url)
  }else{
    res.json({ error: 'invalid url' })
  }
  
})