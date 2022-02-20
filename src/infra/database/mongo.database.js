import mongoose from 'mongoose';

class MongoDatabase {
  instance;

  constructor() {
    this.instance = this.createConnection();
  }

  createConnection() {
    return mongoose.connect(process.env.DB_CONNECTION_STRING);
  }

  closeConnection() {
    this.instance.connection.close();
  }
}

export { MongoDatabase };
