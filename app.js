const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

let db = require('./module/db')
let app = express()




app.post('/api/login',(req,res)=>{

  let user = req.body

  res.send({
    code:0,
    msg:'成功'
  })

})


//签约艺人
app.get('/api/art',(req,res)=>{

  let art = req.query

  res.json({})



})





















app.listen(8828,()=>{
  console.log('服务已开启！');
})