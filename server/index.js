const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
var router = express.Router()

router.get('', (req, res) => {
  res.sendFile('/app/index.html', {'root': './'} );
});

app.use(router);
app.use('/app', express.static('./app'));
function start(){
  http.listen(4000, function(){
    console.log('listening on *:4000');
  });
}

exports.start = start;
