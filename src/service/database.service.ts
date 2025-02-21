import { MongoClient, Db, Collection } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

class DatabaseService {
  private client: MongoClient;
  private db: Db;
  public messages: Collection;

  constructor() {
    this.client = new MongoClient(process.env.MONGO_URL as string);
    this.db = this.client.db(process.env.MONGO_DB_NAME);
    this.messages = this.db.collection(process.env.MONGO_COLLECTION_NAME || "messages");
  }

  async connect() {
    await this.client.connect();
    console.log("✅ Connected to MongoDB");
  }
}

const databaseService = new DatabaseService();
export default databaseService;
