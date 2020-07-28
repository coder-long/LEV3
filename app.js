const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const User = require('./module/user')
const Vehicle = require('./module/vehicle')
let db = require('./module/db')
let app = express()


// new User({
//   username:'jgfhjkhgjkdfhg',
//   pwd:'gkhjdfkjgikfdjg'
// }).save()


//注册
app.post('/api/res',(req,res)=>{

  let user = new User({
    username:req.body.username,
    pwd:req.body.pwd,
    icon:req.body.icon,// 图片上传的地址
    number:req.body.number
 })

 user.save((err,user)=>{
   if(err){
     res.send(500,{
       code:1,
       msg:'失败'
     })
   }
   res.send({
     code:0,
     msg:'成功'
   })
 })
  // User.insertMany({username:user.username,pwd:user.pwd,icon:user.icon,number:user.number})


})


//登录
app.post('/api/login',(req,res)=>{
  
  let user = req.body
  
  
  User.findOne({username:user.usernamem,pwd:user.pwd},(err,user)=>{

    if(err){
      res.json({
        code:1,
        msg:'错误'
      })
      return
    }

    if(user){
      res.json({
        code:0,
        msg:'登录成功',
        username:user.username,
        pwd:user.pwd
      })
    }else{
      res.send({
        code:1,
        msg:'用户名或密码错误！'
      })
    }

  })


})


//搜索
app.get('/api/search',(req,res)=>{


  let vehicle = new vehicle({

    char_type:req.query

  })
  let char_type = vehicle.char_type

  Vehicle.find({})

  res.json({})

})

let xx = Vehicle.findOne({'char_type':'本田 思域 2019款 220TURBO CVT劲动版 国VI'},(err,vehicle)=>{

  if(err){
    // res.json({
    //   code:1,
    //   msg:'无结果'
    // })

    return
  }

  // res.send({
  //   code:0,
  //   msg:'搜寻成功'
  // })

  console.log(vehicle);


})
// console.log(33333,xx);

//分页

app.post('/api/page',(req,res)=>{





})




















app.listen(8828,()=>{
  console.log('服务已开启！');
})