let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let PlayerSchema = new Schema({
  name: String,
  team: String,
  position: String,
  number: Number,
  week: Number,
  passingYds: Number,
  passingTD: Number,
  passingAtt: Number,
  passingComp: Number,
  interceptions: Number,
  rushingYds: Number,
  rushingTD: Number,
  fumbles: Number,
  fumblesLost: Number
})

let Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
