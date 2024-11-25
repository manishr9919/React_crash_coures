const mongoose=require("mongoose")

const courseSchema=mongoose.Schema({
    id:{type:String,required:true},
    tile:{type:String,required:true},
    category:{type:String,required:true},
    difficulty:{type:String,required:true},
    description:{type:String,required:true},
},{versionKey:false}
)

CourseModel=mongoose.model("course",courseSchema)

module.exports=CourseModel