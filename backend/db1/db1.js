var mongoose=require('mongoose');
var con;
mongoose.Promise=global.Promise;
var cb=function(err) {
    if(!err){
        console.log("connection opened");
    }
    else{
        console.log("connection failed");
    }
};
mongoose.connect("mongo_db_URL,cb);
con=mongoose.connection;
module.exports={mongoose};
