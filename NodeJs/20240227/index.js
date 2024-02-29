// IMPORTS
const express = require('express');
const cors = require('cors');
const HTTPSTATUSCODE = require('./utils/httpStatusCode');
const PORT = 3000;
const { connectMongo } = require("./utils/db"); 
const classicsRouter = require('./src/routes/classics.routes');
// CONFIG
const app = express();
connectMongo();


// HEADER CONTROL
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//ENDPOINTS
app.get('/', (req, res, next)=>{
    res.status(200).json({
        status: 200,
        message:'wellcome to my server',
        app: 'my app'
    })
});

app.use('/api/classics', classicsRouter);

//ERRORES
app.use((req, res, next) => { 
    let error = new Error(); 
    error.status = 404; 
    error.message = HTTPSTATUSCODE[404]; 
    next(error); 
});
app.use((error, req, res, next) => { 
    return res.status(error.status || 500).json(error.message || 'Unexpected error');
})

//ESCUCHA

app.listen(PORT, () => { 
    console.log(`app running in port ${PORT}`);
});