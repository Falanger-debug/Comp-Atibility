import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const PORT = process.env.PORT || 8080;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware for static files
app.use(express.static(path.join(__dirname, 'public')));

// view settings (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});