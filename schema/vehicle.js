const mongose = require("mongoose")

let Vehicle = mongose.Schema({

  char_types:String, //车类型
  img_srcs:String, //图片地址
  year:String,   // 年份
  mileage:String, //里程
  now_price:String, //现价
  pre_prices:String, // 原价
  position:String, //位置
  icon_new:String //新上市

})

module.exports = Vehicle
