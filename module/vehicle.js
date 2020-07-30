/*
   model：使用schema创建的数据库操作模型

*/
var VehicleSchema = require("../schema/vehicle");

var mongoose = require("mongoose");

var Vehicle = mongoose.model("Vehicle",VehicleSchema) //


module.exports = Vehicle