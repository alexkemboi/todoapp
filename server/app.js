const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();

const dbService=require('./todoService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//create
app.post('/insert',(request,response)=>{
  
});

//read
app.get('/get',(request,response)=>{
    response.json({
        success:true
    })
console.log('server connected')
});
app.listen(process.env.PORT,()=>console.log("app is runnning"));
