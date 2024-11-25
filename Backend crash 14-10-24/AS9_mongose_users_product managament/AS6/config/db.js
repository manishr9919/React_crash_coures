const mongoose=require("mongoose")
const url="mongodb://127.0.0.1:27017/productManagament"
const connect=()=>{
    return mongoose.connect(url)
}
module.exports=connect