const express = require('express');
const app = express();
const mongoose = require('mongoose')
app.use(express.json())

const mongo_url ="mongodb+srv://vimukthi:1234pwd@login.tvgmjmp.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongo_url,{
    useNewUrlParser:true
}).then(()=>{console.log("connect to the db")})
.catch((e)=>console.log(e))



app.listen(5000,()=>{
    console.log("Server started");
})

app.post("/post",async(req,res)=>{
    console.log(req.body);
    const {data} = req.body;

try {
    if(data1 == "vimukthi"){
        res.send({status:"ok"});
    }else{
        res.send({status:"User Not Found."});
    }
} catch (error) {
    res.send({status:"error"});
}

    
})