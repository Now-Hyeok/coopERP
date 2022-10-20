const express = require('express');
const { off } = require('../config/config');
const router = express.Router();
let pool = require('../config/config');
const { warehousing_schedule } = require('../models/index.js')


router.get('/stock',(req,res,next)=>{
  pool.getConnection((err,conn)=>{
    if(err) console.error(err);
    let sql = `select STRAIGHT_JOIN ws.Shipment_amount, ws.Shipment_date, ws.Req_price,ws.Product_quailty, p.Product_name,cm.Member_name  
    from warehousing_schedule ws left join product p on ws.Product_id = p.Product_id left join coopMember cm ON ws.Member_id = cm.Member_id `;
    conn.query(sql,(err,result)=>{
      conn.release();
      if(err){
        console.error(err);
      }
      res.send(result);
    })
  })
})

router.post('/registration',async (req,res,next)=>{
  await warehousing_schedule.create({
    Member_id : req.body.member,
    Product_id : req.body.product,
    Shipment_amount : req.body.amount,
    Shipment_date : req.body.date,
    Req_price : req.body.price,
    Product_quailty : req.body.quality
  }).then(_=>console.log('data is created'))
  res.send('');

})

router.delete('/delete/:id',(req,res,next)=>{
  if(!req.params.id){
    res.status(500).send('id is not exist.');
    return ;

  }




})


module.exports = router;





  
  // app.get('/api/user/data',(req,res)=>{
  //   db.query('SELECT * FROM coopMember',(err,rows,fields)=>{
  //     console.log(rows);
  //     console.log(fields);
  //   });
  // });