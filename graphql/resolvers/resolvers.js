const Car = require('../../models/Car');

module.exports = {
  Query: {
    async getCars(parent, args) {
      return await Car.find();
    }
  },
  Mutation: {
    async addCar(parent, args) {
      const newCar = new Car({
        name: args.carInput.name
      });
      await newCar.save();
      return newCar
    }
  }
};
