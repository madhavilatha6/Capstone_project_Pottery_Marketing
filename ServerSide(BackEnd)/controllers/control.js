async function insertpotteryData(req,res){
    var getTableData = `SELECT *  FROM searchData`;
    con.query(getTableData, function(err, result){
        if(err) throw err;
        res.status(200).send(result);
    })
}

async function potterysearch(req,res){
    var data = req.params.searchData
    var getTableData = `select * from searchData where category_name="${data}"`;
    con.query(getTableData, function(err, result){
        if(err) throw err;
        res.status(200).send(result);
    })
}

async function potterysort(req,res){
    var sortData = req.params.sortData
    var getTableData = `select * from searchData ORDER BY  category_price${(sortData === 'asc') ? "ASC" : "DESC"}"`;
    con.query(getTableData, function(err, result){
        if(err) throw err;
        res.status(200).send(result);
    })
}

export default{insertpotteryData,potterysearch,potterysort}