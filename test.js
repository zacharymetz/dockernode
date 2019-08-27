var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

let pid = "Asda";
    let logTime = (new Date()).getTime();
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cloudlogs");
        dbo.createCollection("functions/" + pid, function(err, res) {
          if (err){
            db.close();
            throw err;
            
          } 
          //    now we wanna insert the inital record in there 
          let logObj = {
              type : "logStart",
              time : logTime,
              message : "asdasd"
          }
          dbo.collection("functions/" + pid).insertOne(logObj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
          });
          
        });});