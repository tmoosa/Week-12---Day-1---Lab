const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fruits = require('./models/fruits');
const vegetables = require('./models/vegetables');


const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// Middleware;
app.use((req, res, next) => {
  console.log('Middleware: I run for all routes, 1');
  next();
});
// By implementing the line below, we now have access to the req.body. Which is the parsed formData from the form request.
app.use(express.urlencoded({ extended: false }));

// const middleware = (req, res, next) => {
//   console.log('Middleware: I run for all routes, 1');
//   next();
// };

// Index
app.get('/fruits', (req, res) => {
  console.log('Index controller');
  res.render('fruits/Index', { fruits });
});
// Index
app.get('/vegetables', (req, res) => {
  console.log('Index controller');
  res.render('vegetables/Index', { vegetables });
});

// New
app.get('/fruits/new', (req, res) => {
  console.log('New controller');
  res.render('fruits/New');
});

// New
app.get('/vegetables/new', (req, res) => {
  console.log('New controller');
  res.render('vegetables/New');
});


// Delete

// Update

// Create
app.post('/fruits', (req, res) => {
  req.body.readyToEat = req.body.readyToEat === 'on';
  fruits.push(req.body);
  console.log(fruits);
  res.send('data received');
});

app.post('/vegetables', (req, res) => {
  req.body.readyToEat = req.body.readyToEat === 'on';
  vegetables.push(req.body);
  console.log(vegetables);
  res.send('data received');
});

// Edit

// Show
app.get('/fruits/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < fruits.length) {
    res.render('fruits/Show', {
      fruit: fruits[id],
    });
  } else {
    
  }
});

app.get('/vegetables/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < vegetables.length) {
    res.render('vegetables/Show', {
      vegetables: vegetables[id],
    });
  } else {
    
  }
});


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});