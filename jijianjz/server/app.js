//加载express模块
const express=require("express");

//创建express对象
const server=express();

//加载MySQL模块
const mysql = require('mysql');

//创建MySQL连接池
const pool = mysql.createPool({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:'',
  database:'design',
  charset:'utf8',
  connectionLimit:20
});

//加载cors模块
const cors=require("cors");
server.use(cors({
  origin:['http://127.0.0.1:8080','http://localhost:8080']
}));

//获取图片的接口
server.get('/result',(req,res)=>{
  //SQL语句
  let sql = 'SELECT image FROM images';
  //执行SQL语句
  pool.query(sql,(err,results)=>{
    if(err) throw err;
    res.send({message:'查询成功',code:1,results:results});
    console.log(results)
  });
});


//创建监听对象
server.listen(3000,()=>{
  console.log("server is running");
})