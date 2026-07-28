import express from 'express';
import url from 'url';
import path from 'path';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.set('views_engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const PORT = process.env.PORT || 8800;
app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})