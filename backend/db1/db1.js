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
mongoose.connect("mongodb://localhost:27017/Diagonstic_database",{ useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex:true},cb);
con=mongoose.connection;
module.exports={mongoose};