const express = require("express");
const app = express();
const mysql = require ("mysql")
const cors = require ("cors")




app.use(cors())
app.use(express.json())

const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})

//get all data from sql
app.get('/', (req, res)=> {
    const sql = "SELECT * FROM users_table";
    connection.query(sql, (err, data)=>{
       if (err) res.json(err) ;
        res.json(data);
    });
});


//read specific data

app.get("/read/:id", (req, res)=>{
    const id = req.params.id;
    const sql = "SELECT * FROM users_table WHERE ID = ?";
    connection.query(sql, [id],(err, data)=>{
        if (err) res.json(err)
        res.json(data)
    });
});

//create 
app.post("/create", (req,res)=>{
    const sql = "INSERT INTO users_table (`id`, `name`, `email`, `age`) VALUES(?)";
    const values =[
        req.body.id,
        req.body.name,
        req.body.email,
        req.body.age
    ]
    connection.query(sql, [values],(err, data)=>{
        if (err) res.json(err)
        res.json(data)
    })
})


//upate
app.put("/update/:id", (req,res)=>{
    const sql = "UPDATE users_table SET `name`=?, `email`=?,`age`=? WHERE  ID = ?";
    const id = req.params.id
   
    connection.query(sql, [req.body.name,req.body.email,req.body.age,id], (err,data)=>{
        if (err) res.json(err)
        res.json(data)
    })
})

//delete

app.delete("/delete/:id",(req,res)=>{
    const sql ="DELETE FROM users_table WHERE ID = ?";
    const id = req.params.id;
    connection.query(sql,[id],(err,data)=>{
        if(err) res.json(err);
        res.json(data);
    })
})



app.listen(8000, ()=>{
    console.log('App Listening on port 8000');
    connection.connect(err=>{
        if(err) throw err;
        console.log('Database connected!');
    })
});
