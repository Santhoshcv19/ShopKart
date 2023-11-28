const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1234",
    database: "ShopKart"
})

client.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
});

// client.query(`select * from "public"."AllUsers"`, (err, result)=>{
//     if(!err){
//         console.log(result.rows);
//     }
//     else{
//         console.log(err);
//     }
//     client.end();
// })

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/message',(req,res)=>{
    // res.json({
    //     message: 'Santhosh Backend Connected!',
    // });
    const { username, password } = req.query;

    client.query(`select * from "user_details"`,(err,result)=>{
        if(!err){
            res.json(result.rows);
        }
        else{
            console.error(err);
            res.status(500).json({ error: 'Database Error' });
        }
    });
});

app.get('/api/products',(req,res)=>{
    // res.json({
    //     message: 'Santhosh Backend Connected!',
    // });
    const { product_name, detail_of_product } = req.query;

    client.query(`select * from "product_details"`,(err,result)=>{
        if(!err){
            res.json(result.rows);
            // res.status(200).json({message: 'Login Successful'});
            // console.log(username);
            // else{
            //     res.status(401).json({message: 'Invalid Username or password'});
            // }
        }
        else{
            console.error(err);
            res.status(500).json({ error: 'Database Error' });
        }
    });
});

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;

    client.query('SELECT detail_of_product FROM "product_details" WHERE id = $1', [id], (err, result) => {
        if (!err) {
            res.json(result.rows[0]);
        } else {
            console.error("node ",err);
            res.status(500).json({ error: 'Database Error' });
        }
    });
});

app.get('/api/get-product/:categoryId', (req, res) => {
    const { categoryId } = req.params;
    client.query('SELECT * FROM "product_details" where category_id = $1', [categoryId], (err, result) => {
        if (!err) {
            res.json(result.rows);
        } else {
            console.error("node ",err);
            console.err("Error executing query",err)
            res.status(500).json({ error: 'Database Error', details: err.message, stack: err.stack });
        }
    });
});

app.listen(3000, ()=>{
    console.log('Server listening on Port 3000');
});

const cors = require('cors');
app.use(cors());

app.post('/api/signup', (req,res)=>{

    const { username, password } = req.body;
    console.log('Received data:', username, password);
    client.query('INSERT INTO user_details(username, password, is_delete) VALUES ($1, $2, 0)', [username, password], (err,result) =>{
        if(!err){
            res.status(200).json({ message: 'Signup successful' });
        } else{
            console.error(err);
            res.status(500).json({ error: 'Database Error', details: err.message }); 
        }
    });
});