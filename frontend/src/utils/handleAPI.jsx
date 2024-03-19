import axios from "axios";

 const baseURL = 'https://todo-web-app-st10.onrender.com/toDo'
//  const baseURL = 'http://localhost:8000/toDo'

const getAllToDo = (setToDo)=>{
    axios.get(baseURL)
    .then((res)=> {
        console.log(res);
        setToDo(res.data);
})
}

const addToDo = (task, setText, setToDo)=>{
    axios.post(`${baseURL}/addToDo`,{ task })
    .then((data)=>{
        console.log('Added to do', data);
        setText("");
        getAllToDo(setToDo);
    })
    .catch((err)=>{console.log(err)})
};

const updateToDo = (toDoId, task,setText, setToDo,setIsUpdating)=>{
    axios.
    post(`${baseURL}/updateToDo`,{ _id: toDoId , task:task })
    .then((data)=>{
        setText("")
        console.log(data)
        updateToDos(setToDo);
        setIsUpdating(false);
    })
    .catch((err)=>{console.log(err)})
};

const updateToDos=(setToDo)=>{
    axios.get(baseURL)
    .then((res)=> {
        console.log(res.data);
        setToDo(res.data);
        
})
alert("updated successfully Please refresh");
}

const deleteToDo = (toDoId, setToDo,)=>{
    axios.
    post(`${baseURL}/deleteToDo`,{ _id: toDoId })
    .then((data)=>{
        getAllToDo(setToDo);
    })
    .catch((err)=>{console.log(err)})
};

const toggleToDoStatus = async (id, status, setToDo) => {
    try {
      await axios.post(`${baseURL}/updateToDo`, { _id: id, status: !status });
      getAllToDo(setToDo);
    } catch (error) {
      console.error('Error toggling todo status:', error);
    }
  };

export {getAllToDo,addToDo,updateToDo, deleteToDo, toggleToDoStatus}; 