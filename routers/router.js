const router = require("express").Router();
const db = require("../config/db")



//test

router.get('/', (req, res) =>
    {
        const sql = "SELECT * FROM agenda_events"  
        db.query(sql,(err,result)=>{
            if(!err){
                res.render("Agenda",{data:result});
            }
        })
    }); 


module.exports = router