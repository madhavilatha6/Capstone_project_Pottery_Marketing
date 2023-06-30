const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
const app = express();

app.use(cors(),express.json());
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MADHULATHA@123",
    database:'categories'
});

app.get("/data",async(req,res) =>{
        var getTableData = `SELECT *  FROM searchData`;
        con.query(getTableData, function(err, result){
            if(err) throw err;
            res.status(200).send(result);
        })
})
app.get("/search/:searchData",async(req,res) =>{
    var data = req.params.searchData
    var getTableData = `select * from searchData where category_name="${data}"`;
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
