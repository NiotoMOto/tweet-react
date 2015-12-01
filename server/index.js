const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
var router = express.Router()

router.get('', (req, res) => {
  res.sendFile('/app/index.html', {'root': './'} );
});

app.use(router);
app.use('/app', express.static('./app'));
app.use('/dist', express.static('./dist'));
function start(){
  http.listen(3000, function(){
    console.log('listening on *:3000');
  });
}

exports.start = start;
