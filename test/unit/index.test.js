var expect = require('expect.js');
var chai = require('chai');

var should = chai.should();

describe('models/index', function () {
  before(() => {
    var models = require('../../src/models');
    return models.sequelize.sync()
      .then(() => {
        models.Categorie.create({label:"Routier"});
      })
      .then(() => {
        models.Categorie.create({label:"Brasserie"});
      })
      .then(() => {
        models.Categorie.create({label:"Cantine"});
      })
      .then(() => {
        models.Categorie.create({label:"FastFood"});
      })
      .then(() => {
        models.Categorie.create({label:"Gastronomique"});
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
    .create({ firstName: 'Nicolas', lastName: 'Savois' })
    .then(employee => {
      employee.get('firstName').should.equal("Nicolas");
      employee.get('lastName').should.equal("Savois");
    })
  })

  it('should return a list of categorie', () => {
    var models = require('../../src/models');
    return models.Categorie.findAll().then((categories) => {
      categories.length.should.equal(5);
    });
  })
});

