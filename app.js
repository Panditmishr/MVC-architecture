const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

app.set('view engine', 'ejs');
app.use('/', bookRoutes);

app.listen(4000, () => {
  console.log('Server running at http://localhost:4000');
});
