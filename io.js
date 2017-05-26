const botoes = require('./services/botoes')

module.exports = function (socket) {
  console.log('Eu existo!!!!!!')

  botoes.on('apertou', () => {
    socket.broadcast.emit('message', `Recebido em ${(new Date).toISOString()}`)
  })
};
