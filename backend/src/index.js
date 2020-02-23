const express = require('express');
const mongoose = require('mongoose'); 
const routes = require('./routes.js')

const app = express();
mongoose.connect('mongodb+srv://cesao:adminzao@cluster0-prdnb.mongodb.net/week10?retryWrites=true&w=majority', 
{ useNewUrlParser: true,
     useUnifiedTopology: true
    },   
                 );


app.use(express.json())
app.use(routes);


// METODOS HTTP -> GET, POST, PUT, DELETE
// Query Params: req.query  (Filtros, ordenacao, paginacao, ...)
// Route params: req.params (identificar um recurso na alteracao ou remocao)
// Body:  req.bot ((dados pra criacao ou alteracao de um registro )



app.listen(3333);

