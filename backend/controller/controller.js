const toDoModel = require("../model/model");


//.................to create todo............
async function createNewToDo (req, res){
    try{
        const toDo  = req.body;
        const newToDo = await toDoModel.create(toDo);
        return res.status(201)
        .json(newToDo.toJSON());
    }catch(err){
        console.log(err);
        return res.status(400)
        .send({message: 'Failed to add the task'});
        
    }
}

//.....................to update todo .................

async function  updateTodo(req,res){
    // const id  = req.params.id ;
    const{_id, task,status} = req.body;
    console.log(_id);
    console.log(req.body);
    let toDo;
if(typeof req.body.status !=="undefined"){
    toDo = await toDoModel.findByIdAndUpdate(_id,{status:req.body.status})
}
if(req.body.task){
    toDo = await toDoModel.findByIdAndUpdate(_id,{task:req.body.task})
  } 
   if(toDo){
        return res.status(200).send("Updated Sucmvhmbhmhmessfully");
    }else {
        return res.status(500).send("There was an issue updating this toDo")

    }
}

//..................to delete a toDo....................

async function  deleteTodo(req ,res){
    
    const {_id} = req.body
  
    

    // let result = await toDoModel.deleteOne({task: title})
    let result = toDoModel.findByIdAndDelete(_id)
      .then(()=>{
          return res.status(200).json({message:"Deleted Successfully"})})
          .catch((err)=>{return res.status(400).json({message : "Task not found!"})})




};

//...................get toDos............

async function  getAllTodos(req ,res){
    const todos = await toDoModel.find();
    console.log(todos);
    res.status(200).json(todos);
    
}


module.exports = {
    createNewToDo,
    updateTodo,
    deleteTodo,
    getAllTodos,
}