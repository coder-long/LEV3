const mongose = require("mongoose")

var UserSchema = mongose.Schema({

  usernames:String,
  pwd:String,
  icon:String,
  number:Number

})




module.exports = UserSchema