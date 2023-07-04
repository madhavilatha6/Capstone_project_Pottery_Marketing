const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
const app = express();

app.use(cors(),express.json());
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MADHULATHA@123",
    database:'PotteryParadise'
});

app.get("/potterdata",async(req,res) =>{
        var getTableData = `SELECT *  FROM product_info`;
        con.query(getTableData, function(err, result){
            if(err) throw err;
            res.status(200).send(result);
        })
})
app.get("/search/:searchData",async(req,res) =>{
    var data = req.params.searchData
    var getTableData = `select * from product_info where product_name="${data}"`;
    con.query(getTableData, function(err, result){
        if(err) throw err;
        res.status(200).send(result);
    })
})

app.get("/sort/:sortData",async(req,res) =>{
    var sortdata = req.params.sortData
    var getTableData = `select * from product_info ORDER BY  product_price ${(sortdata === 'asc') ? "ASC" : "DESC"}`;
    con.query(getTableData, function(err, result){
        if(err) throw err;
        res.status(200).send(result);
    })
})
const port = 5050;
app.listen(5050, () => {
    console.log(`Server running on port ${port}`);
  }); 
app.on('listening', function() {
    console.log('Express server started on port %s at %s', app.address().port, app.address().address);
});
