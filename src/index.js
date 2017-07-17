const Sequelize = require('sequelize');


// Using models that wraps all models into one.
// kinda ugly in my opinion
var models  = require('./models');


models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



models.User.findOne()
  .then(user => {
    console.log(user.get('firstName'));
  })
  .then(()=>{
    models.sequelize.close();
  });




