const schema = require('./schema')
/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
	/**
	 *
	 * @param _
	 * @param __
	 * @param {{Pet: PetModel}} models
	 */
	pets(_, {input}, { models }) {
	  return models.Pet.findMany(input)
	},
	pet(_, {input}, { models }) {
	  return models.Pet.findOne(input)
	},
	me() {
	  return {
		email: 'yoda@masters.com',
		avatar: 'http://yoda.png',
		friends: [],
	  }
	},
  },
  // Mutation: {
  //
  // },
  Pet: {
	img(pet) {
	  return pet.type === 'DOG'
		  ? 'https://placedog.net/300/300'
		  : 'http://placekitten.com/300/300'
	},
  },
  User: {},
}
