const express = require('express');
// changed to match mini proj, pls advise lol
const allRoutes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// require our models for syncing:
const {Category, Product, ProductTag, Tag} = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// this differs from the mini-proj!  in that it was:
app.use('/',allRoutes);   
// AND line 2 was allRoutes = require('controllers'); this is def worth asking about.
// app.use(routes); <~~OG starter code

// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
      console.log(`App listening at http://localhost:${PORT}`);
  });
}).catch(err=>{
  console.log(err)
});

// OG starter code:
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
