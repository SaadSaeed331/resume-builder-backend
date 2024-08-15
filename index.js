const express = require("express")
const cors = require("cors")
const { default: mongoose } = require("mongoose")
const cvSchema = require("./models/cv.models")


const app = express()
 app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://meetsaad331:saad331@cluster0.nra9gcy.mongodb.net/livecareer_resume")
.then(() => {
    console.log("DB Connected");
})

app.post('/addcv', async (req, res)=>{
    var resp = await cvSchema.create(req.body)

    res.send(resp)
})






app.listen(4000, ()=>{
    console.log("server running");
})