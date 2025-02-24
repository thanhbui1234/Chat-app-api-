import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config();

/**
 * Mã hóa mật khẩu bằng bcrypt
 * @param password - Mật khẩu cần mã hóa
 * @returns Chuỗi hash của mật khẩu
 */
export const  hashPassword = async (password : string):Promise<string> =>{ 
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

/**
 * Kiểm tra mật khẩu nhập vào với mật khẩu đã hash
 * @param password - Mật khẩu người dùng nhập
 * @param hashedPassword - Mật khẩu đã hash trong database
 * @returns true nếu khớp, ngược lại false
 */

export const comparePassword = async (password : string, hashedPassword : string):Promise<boolean> =>{
    return await bcrypt.compare(password, hashedPassword)
}  

/**
 * Tạo Access Token JWT
 * @param payload - Dữ liệu cần lưu trong token (thường là user ID)
 * @returns Token JWT
 */

export const createAcessToken = (payload : object) : string =>{
  return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });

}

/**
 * Xác minh JWT Token
 * @param token - Token cần kiểm tra
 * @returns Thông tin đã giải mã hoặc lỗi
 */
export const verifyToken = (token: string): Promise<object | null> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
      if (err) return reject(null);
      resolve(decoded as object);
    });
  });
}