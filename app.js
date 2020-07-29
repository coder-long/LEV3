const express = require("express")
const cors = require('cors')
const path = require("path")
const bodyParser = require("body-parser")
const User = require('./module/user')
const Vehicle = require('./module/vehicle')
let db = require('./module/db')
let app = express()


app.use(express.static(path.join(__dirname, 'pubic')))
app.use(express.static(path.join(__dirname, 'uplodeImg')))
app.use(cors())
app.use(bodyParser.json()) //前端post提交的代码为json格式的  "{name:'asd'}"
app.use(bodyParser.urlencoded({ //处理前端表单post "a=1;b=2"
    extended: true
}))

// new User({
//   username:'jgfhjkhgjkdfhg',
//   pwd:'gkhjdfkjgikfdjg'
// }).save()

User.find({username:'helong'}).then(res=>console.log(res))
//注册
app.post('/api/res',(req,res)=>{

if(User.find({username:req.body.username})){
  res.json({
    code:1,
    msg:'用户名存在,请重新注册！'
  })

  return
}
  
if(!req.body.username && !req.body.pwd){
  res.json({
    code:1,
    msg:'请输入用户名，或密码！'
  })
  return
}

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
app.post('/api/login', (req, res) => {

    let user = req.body


    User.findOne({ username: user.usernamem, pwd: user.pwd }, (err, user) => {

        if (err) {
            res.json({
                code: 1,
                msg: '错误'
            })
            return
        }

        if (user) {
            res.json({
                code: 0,
                msg: '登录成功',
                username: user.username,
                pwd: user.pwd
            })
        } else {
            res.send({
                code: 1,
                msg: '用户名或密码错误！'
            })
        }

    })


})


//搜索
app.get('/api/search', (req, res) => {

    let char_type = req.query.char_type //传的参数

    Vehicle.find({ char_type: char_type }, (err, vehicle) => {

        if (err) {
            res.json({
                code: 1,
                msg: '无结果'
            })

            return
        }

        res.send({
            code: 0,
            msg: '搜寻成功',
            data: vehicle
        })

    })



    // Vehicle.find({}).then(res => console.log(res))

    //  Vehicle.find({char_type:/奥迪/}).then(res=>console.log(res))

    // Vehicle.remove({char_type:'本田 思域 2019款 220TURBO CVT劲动版 国VI'}).then(res => console.log(res))  


    // Vehicle.find({}).then(res =>console.log(res))
    //分页
    app.post('/api/page', (req, res) => {

        let page = req.body.page

        Vehicle.find({})
            .skip(40 * page)
            .limit(40)
            .then((data) => {
                res.send({
                    code: 0,
                    msg: '成功',
                    data: data
                })

            })

    })


    //删除
    app.post('/api/del', (req, res) => {

        let vehicle = req.body

        Vehicle.remove({ char_type: vehicle.char_type }, (err, vehicle) => {

            if (err) {
                res.json({
                    code: 1,
                    msg: '删除失败'
                })

                return
            }

            res.json({
                code: 0,
                msg: '删除成功！',
                vehicle
            })

        })

    })



    //修改数据
    app.post('/api/modify', (req, res) => {


    })



    // 热车类型分页
    app.post('/api/hot', (req, res) => {

            Vehicle.find({ now_price: { $lt: '15万' } }).limit(12).then((data) => {
                console.log(data);
            })

        })
        // Vehicle.find({now_price:{ $lt: '15万'}}).limit(12).then((data)=>{
        //   console.log(data);
        // })

































    app.listen(8828, () => {
        console.log('服务已开启！');
    })


})