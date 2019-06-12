const express = require('express');
const bodyParser = require('body-parser');
const googleSheets = require('gsa-sheets');

// TODO(you): Update the contents of privateSettings accordingly, as you did
// in HW5, then uncomment this line.
const key = require('./privateSettings.json');

// TODO(you): Change the value of this string to the spreadsheet id for your
// GSA spreadsheet, as you did in HW5, then uncomment these lines.
const SPREADSHEET_ID = '1LQH48-4x0DxW_HsNqMNtC76YlR5KsSY5gKb8Jf8iePo';
const sheet = googleSheets(key.client_email, key.private_key, SPREADSHEET_ID);

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

// TODO(you): Add at least 1 GET route and 1 POST route.

async function onGet(req, res){
  const result = await sheet.getRows();
  const rows = result.rows;
  console.log(rows);
  res.json(rows);
}

async function onPost(req, res){
  const messageBody = req.body;
  console.log(messageBody);
  await sheet.appendRow(messageBody).then( value => {
    res.json( { "response": "success"} );
    console.log("Post: " + value);
    }, reason => {
    res.json( { "response": reason} );
    console.log("Post: " + reason);
    })
   
}
app.post('/', jsonParser, onPost);

async function onPostLog(req, res){
  const messageBody = req.body;
  console.log(messageBody);
  const account = messageBody[0];
  const password = messageBody[1];
  const result = await sheet.getRows();
  const rows = result.rows;
  let flag = 0;
  let GPA = 0;
  let name = "";
  for(let i in rows){
    if(rows[i][0] == account && rows[i][1]==password){
      GPA = rows[i][2];
      name = rows[i][0];
      flag = 1;
      break;
    }
  }
  if(flag == 1){
    res.json( { "response": "success" , "GPA": GPA, "name": name});
  }
  else{
    res.json( { "response": "fail"} );
  }
}
app.post('/login', jsonParser, onPostLog);

async function onPatch(req, res){
  const messageBody = req.body;
  const account = messageBody[0];
  const password = messageBody[1];
  const result = await sheet.getRows();
  const rows = result.rows;
  let row_index;
  for(let i in rows){
    if(rows[i][0]==account && rows[i][1]==password){
      row_index = i;
      break;
    }
  }
  await sheet.setRow(parseInt(row_index),messageBody).then(value=>{
    res.json({ "response": "success"});
    console.log("Change GPA success");
    }, reason=>{
      res.json({"response" : reason});
      console.log("Change GPA failed");
    })
  }
  app.patch('/', jsonParser, onPatch);
// Please don't change this; this is needed to deploy on Heroku.
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});
