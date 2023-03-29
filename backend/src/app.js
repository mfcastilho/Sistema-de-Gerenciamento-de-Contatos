const express = require("express");
const app = express();

const port = 5000;

const userRoute = require("./routes/userRoute");


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(userRoute);

app.listen(port, ()=>{
     console.log(`Servidor rodando na porta: ${port}`);
})