const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Madhulatha@123",
    database:'PotteryParadise'
});

app.get("/products",async(req,res) =>{
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

app.get("/categary_info/:categaryData",async(req,res) =>{
    var categarydata = req.params.categaryData
    var getTableData = `select * from product_info where categary_id="${categarydata}"`;
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

