var expect = require('expect.js');
var chai = require('chai');

var should = chai.should();

describe('models/index', function () {
  before(() => {
    var models = require('../../src/models');
    return models.sequelize.sync()
      .then(() => {
        models.Categorie.create({ id: 1, label:'Routier'});
      })
      .then(() => {
        models.Categorie.create({ id: 2, label:'Brasserie'});
      })
      .then(() => {
        models.Categorie.create({ id: 3, label:'Cantine'});
      })
      .then(() => {
        models.Categorie.create({ id: 4, label:'FastFood'});
      })
      .then(() => {
        models.Categorie.create({ id: 5, label:'Gastronomique'});
      })
      .then(() => {
        models.Restaurant.create({ id: 1, name: 'Chez Nicolas', CategorieId:5 })
      })
      .then(() => {
        models.Restaurant.create({ id: 2, name: 'Chez Ferdinand', CategorieId:1 })
      })
      .then(() => {
        models.User.create({ id:1, firstName:'Nicolas', lastName: 'Savois' })
      })
      .then(() => {
        models.Rating.create({ UserId:1, RestaurantId:1, score:5  })
      })
    ;
  })
  it('returns the user model', function () {
    var models = require('../../src/models');
    expect(models.User).to.be.ok();
    should.exist(models.User);
  });

  it('can add data to the user model', () => {
    var models = require('../../src/models');
    return models.User
    .create({ firstName: 'Andre', lastName: 'Vershuren' })
    .then(employee => {
      employee.get('firstName').should.equal('Andre');
      employee.get('lastName').should.equal('Vershuren');
    })
  })

  it('can add data to the restaurant model', () => {
    var models = require('../../src/models');
    return models.Restaurant
    .create({ name: 'Chez Antoine', CategorieId:4 })
    .then(restaurant => {
      restaurant.getCategorie().then(categorie => {
        restaurant.get('name').should.equal('Chez Antoine');
        categorie.get('label').should.equal('FastFood');
      });
    })
  })
  it('should return a list of categorie', () => {
    var models = require('../../src/models');
    return models.Categorie.findAll().then((categories) => {
      categories.length.should.equal(5);
    });
  })
  it('should return a restaurant of categorie Gastronomique', () => {
    var models = require('../../src/models');
    return models.Restaurant.findAll({include:'Categorie'}).then((restos) => {
      restos.length.should.equal(3);
      var resto = restos[0];
    });
  })
  it('should throw an error due to score over the max', () => {
    var models = require('../../src/models');
    models.Rating.create({ UserId:1, RestaurantId:1, score:7  })
    .catch(err => {
      err.errors[0].message.should.equal('Validation max on score failed');
      err.errors[0].type.should.equal('Validation error');
    })
  });
  it('should throw an error due to score under the min', () => {
    var models = require('../../src/models');
    models.Rating.create({ UserId:1, RestaurantId:1, score:-1  })
    .catch(err => {
      err.errors[0].message.should.equal('Validation min on score failed');
      err.errors[0].type.should.equal('Validation error');
    })
  });
});

