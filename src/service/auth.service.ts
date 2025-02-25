import { database } from "../config/database";
import { IUser } from "../interface";
import { ModelType } from "../interface/const";
import { comparePassword, createAcessToken, hashPassword } from "../utils/AuthUtils";

export class AuthService {
    private db = database.getDB();
    
    async registerUser(user : IUser) {
        // Check if email already exists
        const existingUser = await this.db.collection(ModelType.user).findOne({ email: user.email });
        
        if (existingUser) {
            throw new Error('Email already registered');
        }
        // Proceed with registration
        const hashedPassword = hashPassword(user.password);
        // Add user creation logic here
        await this.db
          .collection(ModelType.user)
          .insertOne({ ...user, password: hashedPassword });
        return user;
    }

    async loginUser(data : IUser) {
        const  user = await this.db.collection(ModelType.user).findOne({email : data.email})
        if (!user || !(comparePassword(data.password, String(user.password)))) {
          throw new Error("Invalid email or password");
        }
        const token = createAcessToken({ email: user.email });
       return token
        
    }


}
