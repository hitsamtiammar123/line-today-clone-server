const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',(req,res) => {
  res.send('Success to load server');
})

app.get('/portaljson',(req,res) => {
  axios.get('https://today.line.me/id/portaljson',{
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => {
        res.json(response.data);
      })
      .catch((err)=> {
        res.send(err);
      })
})

app.listen(process.env.PORT || 3010, () => {
  console.log('Server on');
})
