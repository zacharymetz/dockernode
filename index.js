//  import all the supporting function 
var cloud = require('./cloud');


//  import the handler that will be called to 
//  run the code 
var handler = require('./src/function').handler

//  generate a processid for logging to watch out for 
const pid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });






async function main(){
    cloud.logStart(pid);
    try{
    
        handler(cloud,{
            //  this is any data we wanna pass to the proces we are running 
            requestID : pid,
            req:{
                "ip" : "0.0.0.0"
            }
        });

    }catch(error){
        cloud.error(error)
    }finally{
        
    }
}



function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


main();