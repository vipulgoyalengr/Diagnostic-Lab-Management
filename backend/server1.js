var {mongoose}=require('./db1/db1');
const passport=require('passport')
const session=require('express-session')
var cookieSession = require('cookie-session')
var {stud}=require('./model1/user1');
var {stud1}=require('./model1/user2');
var {stud2}=require('./model1/user3');
var {stud3}=require('./model1/user4'); 
var {stud4}=require('./model1/user5');
var {stud5}=require('./model1/user6');
var {stud6}=require('./model1/user7');
var {stud7}=require('./model1/user8');
var checksumLib=require('../paytm/checksum/checksum')
var {stud8}=require('./model1/user9');
var express=require('express');
const fs=require('fs');
// var nodemailer=require('nodemailer');
var bcrypt=require('bcryptjs');
var app=express();
var today=new Date();
var bodyParser=require('body-parser');
require('./passport-setup')
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  }))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods",'PUT,GET,POST,DELETE,OPTIONS');
    res.setHeader("Access-Control-Allow-Headers","Origin,X-auth,X-Requested-With,Content-Type,Accept");
    next();
});
app.use(bodyParser.json());
app.post('/getimage',(req,res)=>{
let path='./image/'+ req.body.img+'.'+req.body.ext;
fs.readFile(path,'base64',(err,buffer)=>{
    let image = buffer.toString('base64');
    let result={"image":image};
    res.send(result);
});
});
//image upload
app.post('/image',(req,res)=>{
let buffer = new Buffer(req.body.image,'base64');
fs.writeFile('./image/'+req.body.imagepath+'.'+req.body.ext,buffer, function(err,re){
    if(err){res.send("error");}
    else{
        res.status(200).send(re);
    }
})
});
app.post('/image1',(req,res)=>{
    console.log(req.body);
    var data=new stud8(req.body);
    data.save().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send(err);
    });
    });
    app.post('/image2',(req,res)=>{
        console.log(req.body);
        var data=new stud6(req.body);
        data.save().then((result)=>{
            res.send(result);
        }).catch((err)=>{
            res.send(err);
        });
        });
    app.post('/pti',(req,res)=>{
        console.log(req.body);
        var data=new stud7(req.body);
        data.save().then((result)=>{
            res.send(result);
        }).catch((err)=>{
            res.send(err);
        });
        });
        app.post('/ptis',(req,res)=>{
            stud7.find({Lab_usr:req.body.Lab_usr}).then((result)=>{
                // if(result.length==0){            }
                res.send(result);
            }).catch((err)=>{
                res.send(err);
            });
            });
            app.get('/payment',(req,res)=>{
                let params={};
                params["MID"]='VZiGsC43689890318925',
                params['WEBSITE']='WEBSTAGING',
                params['CHANNEL_ID']='WEB',
                params['INDUSTRY_TYPE_ID']='Retail',
                params['ORDER_ID']='ORD'+today.getDate()+today.getHours()+today.getMinutes()+today.getSeconds()+"VIP",
                params['CUST_ID']='CUS'+today.getDate()+today.getHours()+today.getMinutes()+today.getSeconds()+"VIP",
                params['TXN_AMOUNT']='350',
                params['CALLBACK_URL']='http://localhost:'+port+'/callback',
                params['EMAIL']='vipul1999goyal@gmail.com',
                params['MOBILE_NO']='7230022389'

                checksumLib.genchecksum(params,'H052jEGETv&xvXtl',(err,checksum)=>{
let txn_url="https://securegw-stage.paytm.in/order/process";
let formFields="";
for (x in params){
    formFields += "<input type='hidden' name='"+x+"' value='"+params[x]+"'/>"
}
formFields += "<input typr='hidden' name='CHECKSUMHASH' value='"+checksum+"'> "

var html='<html><body><center>Please Wait</center><form method="post" action="'+txn_url+'" name="paymentForm">'+ formFields+'</form><script type="text/javascript">document.paymentForm.submit()</script></body></html>'
res.writeHead(200,{'Content-Type':'text/html'});
res.write(html);
res.end();
console.log(err);
                })
                
            })
app.post('/reg',(req,res)=>{
    console.log(req.body);
    var data=new stud(req.body);
    data.save().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send(err);
    });
    });

    app.get('/failed',(req,res)=>res.send('You Failed to Login'))
    app.get('/good',(req,res)=>res.send('Welcome mr ${req.user.email}!'))



    app.get('/spotify', passport.authenticate('spotify',{
        scope: ['user-read-email', 'user-read-private']
      }), function(req, res) {
        // The request will be redirected to spotify for authentication, so this
        // function will not be called.
      });
      
      app.get(
        '/spotify/callback',
        passport.authenticate('spotify', { failureRedirect: '/failed' }),
        function(req, res) {
          // Successful authentication, redirect home.
          res.redirect('/');
        }
      );
    
  
    app.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/good');
  });

    app.post('/dreg',(req,res)=>{
        console.log(req.body);
        var data=new stud2(req.body);
        data.save().then((result)=>{
            res.send(result);
        }).catch((err)=>{
            res.send(err);
        });
        });
    app.post('/book',(req,res)=>{
      
var data3=new stud1(req.body);
data3.save().then((result)=>{
    console.log(result);
    res.send(result);
}).catch((err)=>{
    console.log(err);
    res.send(err);
  
});
    });
    app.post('/feed',(req,res)=>{
      
 var data3=new stud4(req.body);
 data3.save().then((result)=>{
     console.log(result);
     res.send(result);
 }).catch((err)=>{
     console.log(err);
     res.send(err);
   
 });
     });
     app.post('/re',(req,res)=>{
      
        var data3=new stud5(req.body);
        data3.save().then((result)=>{
            console.log(result);
            res.send(result);
        }).catch((err)=>{
            console.log(err);
            res.send(err);
          
        });
            });
            app.post('/re2',(req,res)=>{
      
                var data3=new stud5(req.body);
                data3.save().then((result)=>{
                    console.log(result);
                    res.send(result);
                }).catch((err)=>{
                    console.log(err);
                    res.send(err);
                  
                });
                    });
                    app.post('/edipro',(req,res)=>{
      
                        var data3=new stud(req.body);
                        stud.findOneAndUpdate({Email:req.body.Email},{$set:{'Firstname':req.body.Firstname,'Lastname':req.body.Lastname,'Age':req.body.Age,'Gender':req.body.Gender,'Fathername':req.body.Fathername,'Address':req.body.Address,'Dob':req.body.Dob,'Contact':req.body.Contact,'State':req.body.State}},{new:true}).then((result)=>{
                            console.log(result);
                            res.send(result);
                        }).catch((err)=>{
                            console.log(err);
                            res.send(err);
                          
                        });
                            });
                            app.post('/edipro2',(req,res)=>{
      
                                var data3=new stud2(req.body);
                                stud2.findOneAndUpdate({Lab_usr:req.body.Lab_usr},{$set:{'Lab_name':req.body.Lab_name,'Owner':req.body.Owner,'Address':req.body.Address,'Rating':req.body.Rating,'Contact':req.body.Contact}},{new:true}).then((result)=>{
                                    console.log(result);
                                    res.send(result);
                                }).catch((err)=>{
                                    console.log(err);
                                    res.send(err);
                                  
                                });
                                    });
     app.post('/mod',(req,res)=>{
      
        var data3=new stud(req.body);
        stud.findOneAndUpdate({Email:req.body.Email},{$set:{'Status':req.body.Status}},{new:true}).then((result)=>{
            console.log(result);
            res.send(result);
        }).catch((err)=>{
            console.log(err);
            res.send(err);
          
        });
            });
            app.post('/mod1',(req,res)=>{
      
                // var data3=new stud2(req.body);
                console.log(req.body.Status);
                stud2.findOneAndUpdate({Lab_usr:req.body.Lab_usr},{$set:{'Status':req.body.Status}},{returnNewDocument :true}).then((result)=>{
                    console.log("sdfsf");
                    res.send(result);
                }).catch((err)=>{
                    console.log("sdfsf2313");
                    console.log(err);
                    res.send(err);
                  
                });
                    });
    app.post('/find',(req,res)=>{
        
        stud.find({Email:req.body.Email}).then((result)=>{
            // console.log(result);
        if(result[0].length==0){
            console.log(result);
            res.status(202).send("email not found");
        }
            // else if(result[0].Password==req.body.Password){
            //     res.status(200).send("login");
            // }
            // el se{
            //     res.status(201).send("Password not match")
            // }
            else{ 
            if(result[0].Status=="Activate"){
                // console.log("bcry");
           return bcrypt.compare(req.body.Password,result[0].Password,(err,users)=>{
                console.log(users);
                if(users){
                    console.log("hii2");
                    // return res.status(200);
                    res.status(200).send("login");
                   
                }
                else{
                    console.log("hii3");
                    res.status(201).send("Password not match");
                    
                    
                }
            }
            );
            // if(res.status==200){
                console.log(res.status);
                res.status(200).send("login");
            // }
        }}
        // res.send(result);
        }).catch((err)=>{
            res.send(err);
        });
        });
        app.post('/find2',(req,res)=>{
            stud2.find({Lab_usr:req.body.Lab_usr}).then((result)=>{
            if(result.length==0){
                res.status(202).send("email not found");}
                // else if(result[0].Lab_pass==req.body.Lab_pass){
                //     res.status(200).send("login");
                // }
                // else{
                //     res.status(201).send("Password not match")
                // }
                else if(result[0].Status=="Activate"){
                    console.log("bcry");
               return bcrypt.compare(req.body.Lab_pass,result[0].Lab_pass,(err,users)=>{
                    console.log(users);
                    if(users){
                        console.log("hii2");
                        // return res.status(200);
                        res.status(200).send("login");
                       
                    }
                    else{
                        console.log("hii3");
                        res.status(201).send("Password not match");
                        
                        
                    }
                }
                );
                // if(res.status==200){
                    console.log(res.status);
                    res.status(200).send("login");
                // }
            }
            else{
                res.status(203).send("Password not match");
            }
            // res.send(result);
            }).catch((err)=>{
                res.send(err);
            });
            });
        app.post('/appoint',(req,res)=>{
        stud1.find({Username:req.body.Username}).then((result)=>{
            // if(result.length==0){            }
            res.send(result);
        }).catch((err)=>{
            res.send(err);
        });
        });
        app.post('/ifi',(req,res)=>{
            stud8.find({Email:req.body.Email}).then((result)=>{
                // if(result.length==0){            }
                res.send(result);
            }).catch((err)=>{
                res.send(err);
            });
            });
        app.post('/ss',(req,res)=>{
            stud2.find({Lab_name:req.body.Lab_name}).then((result)=>{
                // if(result.length==0){            }
                res.send(result);
            }).catch((err)=>{
                res.send(err);
            });
            });
            app.post('/repfind',(req,res)=>{
                stud8.find({Email:req.body.Email}).then((result)=>{
                    // if(result.length==0){            }
                    res.send(result);
                }).catch((err)=>{
                    res.send(err);
                });
                });
                app.post('/repfind1',(req,res)=>{
                    stud6.find({Lab_name:req.body.Lab_name}).then((result)=>{
                        // if(result.length==0){            }
                        res.send(result);
                    }).catch((err)=>{
                        res.send(err);
                    });
                    });
            app.get('/fi',(req,res)=>{
                stud.find().then((result)=>{
                        console.log("fhdfh");
                    console.log(result);
                    res.send(result);
                }).catch((err)=>{
                    res.send(err);
                });
                });
                app.get('/fii',(req,res)=>{
                    stud2.find().then((result)=>{
                            console.log("fhdfh");
                        console.log(result);
                        res.send(result);
                    }).catch((err)=>{
                        res.send(err);
                    });
                    });
        app.post('/review',(req,res)=>{
            stud4.find({Lab_name:req.body.Lab_name}).then((result)=>{
                // if(result.length==0){            }
                res.send(result);
            }).catch((err)=>{
                res.send(err);
            });
            });
        app.get('/lab',(req,res)=>{
stud2.find().then((result)=>{
    res.send(result);
}).catch((err)=>{
res.send(err);
});
        });
        app.post('/cli',(req,res)=>{
            stud1.find({Lab_usr:req.body.Lab_usr}).then((result)=>{
                // if(result.length==0){            }
                res.send(result);
            }).catch((err)=>{
                res.send(err);
            });
            });
            app.post('/cli1',(req,res)=>{
                stud.find({Email:req.body.Email}).then((result)=>{
                    // if(result.length==0){           s }
                    res.send(result);
                }).catch((err)=>{
                    res.send(err);
                });
                });
                app.post('/date',(req,res)=>{
                    stud1.find({Date:req.body.Date}).then((result)=>{
                        if(result.length==0){            }
                        else{

                            var transporter=nodemailer.createTransport({
                                // service: 'gmail',
                                host: 'smtp.gmail.com',
                                secure: 'true',
                            port: '465',
                                // port: 2525,
                                auth:{
                                    user:'vipulgoyal.engr@gmail.com',
                                    pass:'Beingvipul'
                                }
                            });
                            var mailOptions={
                            from:'vipulgoyal.engr@gmail.com',
                            to: result.Username,
                            subject:'hii',
                            text:`hiii bro`
                            };
                            transporter.sendMail(mailOptions,function(err,info){
                            if(err){
                            console.log(err);
                            }
                            else{
                                 console.log("email sent"+info.response);
                            }
                            });
                        }
                        // res.send(result);
                    }).catch((err)=>{
                        res.send(err);
                    });
                    });
    port=2001;
app.listen(port,(res)=>{
    console.log(`listening on port ${port}`);
})