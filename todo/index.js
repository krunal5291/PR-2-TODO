const express = require('express')

const app = express()
app.use(express.json())

let initialTodo = [{ title: "HTML", isCompleted: true, id: 1 }, { title: "javascript", isCompleted: true, id: 2 }, { title: "React", isCompleted: false, id: 3 }]
app.get('/', (req, res) => {
    res.send("welcome to the todo api")

})

app.get('/todos', (req, res) => {
    res.send(initialTodo)
})


app.post("/addtodo", (req, res) => {



    let obj = { title,isCompleted,id}=req.body
    obj.id=initialTodo.length+1
    initialTodo.push(obj)

    res.send(obj)
})
app.patch('/update/:id', (req, res) => {
    let { id } = req.params

    initialTodo[id] = { ...initialTodo, ...req.body }

    res.send(initialTodo[id])

})



app.delete('/delete/:id', (req, res) => {
    let { id } = req.params;

    let deletedTodo = initialTodo.splice(id-1, 1)[0];

    console.log(deletedTodo);
    console.log({ deletedTodo: deletedTodo, todos: initialTodo });
    res.send({ deletedTodo: deletedTodo, todos: initialTodo });
});


app.get('/todo/:id', (req, res) => {
    
    let { id } = req.params;

    id=id+1

    res.send(initialTodo[id])
})

app.listen(8090, () => {
    console.log("server start")
})