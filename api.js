const { resolveSoa } = require('dns');
const express = require('express')
const dbconnect = require('./DBconnection')
const app = express();
app.use(express.json());

app.get('/', async(req,res)=>{
    let data = await dbconnect();
    data = await data.find().toArray()
    res.send(data);
})

app.post('',async (req,res)=>{
    let data  = await dbconnect();
    let result = await data.insertOne(req.body);
    res.send(result);
})

app.put('', async (req,res)=>{
    let data = await dbconnect();
    let result = await data.updateOne(
        {name:"Iphone 13"},
        {$set:req.body}
    )
    res.send(result);
})

app.delete('',async(req,res)=>{
    let data = await dbconnect();
    let result = await data.deleteOne({name:"Iphone 12"});

    res.send(result)
})

app.listen(4000);