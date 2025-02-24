import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

// Singleton class to connect to MongoDB
class DatabaseService {
  private static instance: DatabaseService;
  private client: MongoClient;
  private db: Db;

   constructor() {
    this.client = new MongoClient(process.env.MONGO_URL || "");
    this.db = this.client.db(process.env.MONGO_DB_NAME);
   }

  static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  async connect() {
    try {
      // await this.client.connect();
          await this.db.command({ ping: 1 })
          console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
          console.log('Error', error)
          throw error
    }
  }

  getDB(): Db {
    return this.db;
  }
}

export const database = DatabaseService.getInstance();


  // constructor() {
  //   this.client = new MongoClient(uri)
  //   this.db = this.client.db(envConfig.dbName)
  // }

  // async connect() {
  //   try {
  //     // Send a ping to confirm a successful connection
  //     await this.db.command({ ping: 1 })
  //     console.log('Pinged your deployment. You successfully connected to MongoDB!')
  //   } catch (error) {
  //     console.log('Error', error)
  //     throw error
  //   }