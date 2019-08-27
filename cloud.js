//  this file contains all the message you can send to mongodb as "logs "
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//  connect to the databse 
var master_pid;


module.exports.logStart = async function(pid,message=null){
    master_pid = pid;
    let logTime = (new Date()).getTime();
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cloudlogs");
        
          //    now we wanna insert the inital record in there 
          let logObj = {
              type : "logStart",
              time : logTime,
              message : message
          }
          dbo.collection("functions/" + pid).insertOne(logObj, function(err, res) {
            if (err) throw err;
            console.log("Start Logged "+pid);
            db.close();
          });
          
       
      });
}


module.exports.log = async function(message){
    let logTime = (new Date()).getTime();
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cloudlogs");
        let logobj = {
            type : "clougLog",
            time : logTime,
            message : message
        }
        dbo.collection("functions/" + master_pid).insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("Log Loged "+master_pid);
          db.close();
        });
      });
}

module.exports.error = async function(message){
    console.log(message)
    let logTime = (new Date()).getTime();
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cloudlogs");
        let logobj = {
            type : "errorLog",
            time : logTime,
            message : message
        }
        dbo.collection("functions/" + master_pid).insertOne(logobj, function(err, res) {
          if (err) throw err;
          console.log("Error Loged "+master_pid);
          db.close();
        });
      });
}



module.exports.logEnd = async function(){
    let logTime = (new Date()).getTime();
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cloudlogs");
        let logobj = {
            type : "logEnd",
            time : logTime
        }
        dbo.collection("functions/" + master_pid).insertOne(logobj, function(err, res) {
          if (err) throw err;
          console.log("end log sent");
          db.close();
        });
      });
}