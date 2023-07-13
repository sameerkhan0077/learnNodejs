```sql
var nodeMalir = require("nodemailer");
var transport =  nodeMalir.createTransport({
  host:'smtp.gmail.com',
  port:587,
  secure:false,
  requireTLS:true,
  auth:{
    user:'samk786086@gmail.com',
    pass:'123456789'
  }
});
var mailOptions={
  from:'samk786086@gmail.com',
  to:'islamb786086@gmail.com',
  subject:'rajsthanPolice',
  text:'hello sir your account hake'
}
transport.sendMail(mailOptions,function(err,info){
  if(err){
    console.log("this is"+err)
  }else{
    console.log("email has been send",info.response);
  }

})
```
