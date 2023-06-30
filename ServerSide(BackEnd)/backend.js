// const express = require('express');
// const mysql = require('mysql');
// const cors = require("cors");

// // Create an instance of Express
// const app = express();

// app.use(cors(),express.json());
// // Create a connection to the MySQL database
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "MADHULATHA@123",
//     database:'ProductInfo'
// });

// app.get("/data",async(req,res) =>{
//         var getTableData = `SELECT *  FROM Product_Info`;
//         con.query(getTableData, function(err, result){
//             if(err) throw err;
//             // alert("Data added successfully!")
//             res.status(200).send(result);
//         })
// })
// const port = 5500;
// app.listen(5500, () => {
//     console.log(`Server running on port ${port}`);
//   }); 
// app.on('listening', function() {
//     console.log('Express server started on port %s at %s', app.address().port, app.address().address);
// });
