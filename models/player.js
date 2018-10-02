let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let PlayerSchema = new Schema({
  name: String,
  team: String,
  position: String,

})
