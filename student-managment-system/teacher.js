const fs = require("fs");
let  teachers=JSON.parse(fs.readFileSync("teacher.json","utf-8"));

let getAllTeacher =(req,res)=>{
    let response ={
        status:"success",
        data:{
            teachers
        }
    }
    res.status(200).json(response)
}


const createTeacher = (req, res) => {
    const body = req.body;
    const id = teachers[teachers.length - 1].id + 1;
    let obj = Object.assign({id:id},body);
    teachers.push(obj);
    
    fs.writeFileSync("teacher.json", JSON.stringify(teachers), "utf-8");
    res.send("Created");
  };


 let createteacherBulk = (req,res)=>{
    let teacherbody = req.body
    for(teachers of teacherbody){
        let id = teachers[teachers.length-1].id +1;
        let  obj = Object.assign({id:id},teachers)
        teachers.push(obj)

    }
    fs.writeFileSync("teacher.json",JSON.stringify(teachers),'utf-8');
    res.send("createing")
 }

 const getTeacherByID = (req,res)=>{
    let  id=  +req.params.id;
    let  teacher = teachers.filter((teacher)=>{
       return teacher.id === id
    })
    if(!teacher|| teacher.length==0){
        res.status(404).send({
            status:"not found",
            data:{}
        })
    }
    res.status(200).send({
        status:"success",
        data:{
            teacher
        }
    })
};


let updateTeacherById =(req,res)=>{
    let id = +req.params.id;
    let index=teachers.findIndex((teacher)=>{
        return teacher.id===id
    });
    teachers[index]=Object.assign({},req.body)
    fs.writeFileSync("teacher.json", JSON.stringify(teachers), "utf-8");
 res.send("Updated");
}


const  deleteTeacherById =(req,res)=>{
    const id = +req.params.id
    let index =  teachers.findIndex((teacher)=>{
        return teacher.id ===id
    })
    teachers.splice(index,1)
    fs.writeFileSync("teacher.json",JSON.stringify(teachers),'utf-8');
      res.send("Deleted");
    
}


const  updateBulkteacherById =(req,res)=>{
    let body = req.body;
    for(let teacher of body){
        let  id =  teacher.id
        let index = teachers.findIndex((teacher)=>{
            return teacher.id === id
        })
        teachers[index]= teacher
    }
    fs.writeFileSync("teacher.json",JSON.stringify(teachers),'utf-8');
    res.send("done")
}


module.exports={
    getAllTeacher,
    createTeacher,
    createteacherBulk,
    getTeacherByID,
    updateTeacherById,
    deleteTeacherById,
    updateBulkteacherById
}




