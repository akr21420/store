const express = require('express');
const router = express.Router();
const dbconn = require('../lib/db');
router.get("/",function(req,res){
    res.render("purchase");
});

router.post("/",function(req,res){
    let pid = req.body.pid;
    let pname = req.body.pname;
    let qty = req.body.qty;
    let supplier = req.body.supplier;
    let suppid = req.body.suppid;
    let date = req.body.date;
    let pprice = req.body.pprice;
    let mrp = req.body.mrp;
    let data = {
        ProductId: pid,
        ProductName: pname,
        Quantity: qty,
        Supplier: supplier,
        SupplierId: suppid,
        PurchaseDate: date,
        PurchasePrice: pprice,
        MRP: mrp
    }
    dbconn.query('INSERT INTO productdata SET ?',data,function(err,result){
        if(err)
        {
            console.log(err);
        } else {
            console.log('Success');
            res.redirect("/purchase");
        }
    });
});

module.exports = router;