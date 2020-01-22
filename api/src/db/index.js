const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('api/src/db/db.json')
const db = low(adapter)

const createPetModel = require('./pet')
const createUserModel = require('./user')

const models = {
  Pet: createPetModel(db),
  User: createUserModel(db),
}

module.exports = {
  models,
  db
}
