const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.static(__dirname + '/public'));

// EJS Setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Routes
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const projectsRoute = require('./routes/projects');
const servicesRoute = require('./routes/services');
const contactRoute = require('./routes/contact');

app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use('/projects', projectsRoute);
app.use('/services', servicesRoute);
app.use('/contact', contactRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
