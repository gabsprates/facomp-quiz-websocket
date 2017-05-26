const EventEmitter = require('events');

class Botoes extends EventEmitter {

  apertou (equipe) {
    console.log(equipe);
    this.emit('apertou', function(e) { console.log(e); });
  }

}

module.exports = new Botoes();
