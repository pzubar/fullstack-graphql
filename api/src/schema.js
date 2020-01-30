const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
    }
    type Pet {
        id: ID!,
        createdAt: String!,
        name: String,
        type: String
        img: String
    }

    input PetInput {
        name: String
        type: String
    }

    type Query {
        me: User!
        pets(input: PetInput): [Pet]!
        pet(input: PetInput): Pet
        users: [User]!
    }
    
    type Mutation {
        newPet(input: PetInput): Pet!
    }
`

module.exports = typeDefs
