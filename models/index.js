const mongoose = require('mongoose');
mongoose.connect('mongod://localhost/fantasy_test');

let Player = require('./player')

module.exports = {
  Player: PLayer
}
