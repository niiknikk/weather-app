const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 80;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './templates/views'))
hbs.registerPartials(path.join(__dirname, './templates/partials'))

app.use(express.static(path.join(__dirname, './public')));



app.get('', (req, res) => {
    res.status(200).render('index');
});

app.get('/about', (req, res) => {
    res.status(200).render('about');
});

app.get('/weather', (req, res) => {
    res.status(200).render('weather');
});

app.get('*', (req, res) => {
    res.status(404).render('404error', {
        errorMsg: 'Opps! Page Not Found'
    });
});

app.listen(port, () => {
    console.log(`listning to the port ${port}`);
});
