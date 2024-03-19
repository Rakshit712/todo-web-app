const mongoose  = require("mongoose");

const toDoSchema = mongoose.Schema({
    task: { type : String , 
        required : true},
    status :{type : Boolean, default : false},
})
const toDoModel = mongoose.model("todo",toDoSchema);
module.exports= toDoModel;