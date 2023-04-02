const express = require("express");
const cors = require("cors");
const app = express();

const port = 5000;

const userRoute = require("./routes/userRoute");
const contactRoute = require("./routes/contactRoute");

// app.use(cors({
//   origin: "http://localhost:5173",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   preflightContinue:false,
//   optionsSuccessStatus: 204
// }));

// app.use(cors());


const whitelist = ['http://localhost:5173']; // Altere essa linha para incluir o endereço do seu frontend
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(userRoute);
app.use(contactRoute);

app.listen(port, ()=>{
     console.log(`Servidor rodando na porta: ${port}`);
})