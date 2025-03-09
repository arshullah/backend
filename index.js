// import krna or importing express

const express = require('express');
// ye hamne jab likha user router wali file code likhne baad index me likhna hai 
const UserRouter =  require('./routers/userRouter')

// create an express app
const app = express();
const port = 5000;

// middleware 
app.use('/user',UserRouter);



// slash/  inko ham bolte hai routes or endpoints

app.get('/', (req,res) =>{
    res.send('response from express');
})


// add
app.get('/add', (req,res) =>{
    res.send('response from add');
})


// getall
app.get('/getall', (req,res) =>{
    res.send('response from getall');
})


// delete
app.get('/delete', (req,res) =>{
    res.send('response from delete');
})

// starting the server
app.listen(port, () => {console.log('server started');
});