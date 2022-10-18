const express=require("express")
const cors=require("cors")
const dotenv =require("dotenv")
const mongoose=require("mongoose")
const routes=require("./route/index")
dotenv.config()
const app=express()
const PORT=process.env.PORT
const MONGOOSE_CONNECTION=process.env.MONGOOSE_CONNECTION
app.use(cors())
app.use(express.json())
app.use("/v1",routes)
mongoose.connect(MONGOOSE_CONNECTION).then(()=>{
    console.log("Connected to server")
    app.listen(PORT,()=>{
        console.log("server is listing to the port=" + PORT)
    })
})
