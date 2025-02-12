import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import mainRoute from "./routes/mainRoute.js";
import productsRoutes from "./routes/productsRoutes.js";


const PORT = process.env.PORT || 8080;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware for static files
app.use(express.static(path.join(__dirname, 'public')));

// view settings (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes
app.use('/', mainRoute);
app.use('/products', productsRoutes);
app.use('/build', productsRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});