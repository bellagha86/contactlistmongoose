const express= require ("express")
const mongoose = require("mongoose")
const router = require("./routes/contacts")

const app=express()


app.use(express.json())

const mongoURI="mongodb+srv://manoo:0806@cluster0-xpwx7.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongoURI,
    { useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true  })
.then(()=>console.log("Mongodb connected ...")).catch(err=>console.log(err))

app.use("/contact-list",router)


const port = process.env.PORT || 5000

app.listen(port,err=>{
    err?console.log("failed to connect"):console.log(`server started on port ${port}....`)
})