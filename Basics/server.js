const express = require("express");
const app = express();

app.use(express.json());

let counter = 0;

const middleware1 = (req, res, next) => {
    console.log("MD1");
    next();
}
const middlware2 = (req, res, next) => {
    console.log("MD2");
    next();
}

app.get('/test', (req, res) => {
    counter++;
    if(counter%3 === 0) {
        console.log("Inside of faster")
        return res.send({msg: "faster response"})
    } 
    
    setTimeout(() => {
        console.log("Inside of slower") 
        return res.send({msg: "slower response"});
    }, 20 * 1000);
    
})

app.get('/sync', async (req, res) => {
    for(let i = 0;i<1000000000000;i++) {

    }
    // await  DB calling, netwrok calling, OS task etc.
    return res.send({msg: "long running sync task"})
})

app.get('/home', middleware1, middlware2, (req, res)=>{
    res.send("Hi world")
});
let port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Server listening at 4000")
})