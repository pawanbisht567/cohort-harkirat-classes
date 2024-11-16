const express = require("express");
const app = express();

app.use(express.json())
app.get('/', (req, res, next) =>{
    res.status(200).send({ message: "Get requestssss" });
})

app.listen(3333, () => {
    console.log('Server running at 6000')
})
