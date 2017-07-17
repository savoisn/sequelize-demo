const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://mydemo:mydemo@localhost:5432/mydemo');

const User = require('./models/User')(sequelize, Sequelize);


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



// force: true will drop the table if it already exists

//User.findAll().then(users => {
  //console.log(users)
//});
//

User.findOne()
  .then(user => {
    console.log(user.get('firstName'));
  })
  .then(()=>{
    sequelize.close();
  });




