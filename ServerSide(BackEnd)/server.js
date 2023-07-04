const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
const app = express();

app.use(cors(),express.json());

const port = 5050;
app.listen(5050, () => {
    console.log(`Server running on port ${port}`);
  }); 
app.on('listening', function() {
    console.log('Express server started on port %s at %s', app.address().port, app.address().address);
});
