import { MongoDatabase } from './mongo.database';

const createDatabaseConnection = () => new MongoDatabase();

export {
  createDatabaseConnection,
};
