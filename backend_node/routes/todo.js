const express = require('express')
const router = express.Router()
let todosArray = require("../db")
const {createdToDo} = require("../types")
let count = 0
router.get("/todos", (req,res)=>{
    res.json(todosArray)
})

router.post("/todo", (req,res)=>{
    const createPayLoad = req.body
    // const parsedPayLoad = createdToDo.safeParse(createPayLoad)
    // if(!parsedPayLoad.success){
    //     res.status(411).json({
    //         msg : "You sent the wrong input"
    //     })
    // }
    // else{        
    // }
    const newToDo = {
        id : count++,
        title : createPayLoad.toDo,
        completed : false
    }
    todosArray.push(newToDo)
        res.status(201).json({
            createPayLoad
        })

})

router.put("/todo/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const updatedToDo = req.body
    for(let i=0;i<todosArray.length;i++){
        if(todosArray[i].id==id){
            todosArray[i].title = updatedToDo.title
            res.json({updatedToDo : updatedToDo})
            return
        }
    }
    
})

router.put("/todo/status/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    for(let i=0;i<todosArray.length;i++){
        if(todosArray[i].id==id){
            todosArray[i].completed = true
            res.json(todosArray[i])
            return
        }
    }
    
})

router.delete("/todo/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    todosArray = todosArray.filter((todo) => todo.id!==id)
    res.status(204).end()
})




module.exports = router