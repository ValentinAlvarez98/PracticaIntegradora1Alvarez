import express from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';

import productsRouter from './routes/products.routes.js';

import mongoose from 'mongoose';

const app = express();
const PORT = 8080;

mongoose.set('strictQuery', false);
const connection = mongoose.connect('mongodb+srv://valentinalvarez1998:UMGgkpPEVuR082JW@primera-practica-integr.2ja87xe.mongodb.net/?retryWrites=true&w=majority');

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({
      extended: true
}));

app.use('/api/products', productsRouter);

const server = app.listen(PORT, () => {
      console.log(`Servidor escuchando desde el puerto ${PORT}`);
});