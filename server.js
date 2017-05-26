var app = require('express')();
var httpServer = require('http').createServer(app)
var io = require('socket.io')(httpServer);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST')
  next()
})

io.on('connection', require('./io.js'));


// acao de botao
app.get('/botao/:id', (req, res, next) => {

  console.log('equipe ' + req.params.id);
  io.emit('apertou', { equipe: req.params.id });
  return res.sendStatus(200)

});



// acao do coração
app.get('/coracao/:batida', (req, res, next) => {

  console.log('batimentos ' + req.params.id);
  io.emit('coracao', { batimento: req.params.batida });
  return res.sendStatus(200)

});


// start server
httpServer.listen(9990, () => {
  console.log('HTTP existe')
});
