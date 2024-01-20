const express = require("express")
const app = express()
const os = require("os")
const hostname = os.hostname()

app.get("/",(req,res)=>{
	res.send("hello from"+hostname)
})

app.listen(8181,()=>console.log("port 8181 on"+ hostname));
