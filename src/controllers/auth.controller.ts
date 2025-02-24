import { Request, Response } from "express";
import { AuthService } from "../service/auth.service";

export class AuthController {
    private authService  =  new AuthService()
     
    async register(req: Request ,res : Response) {
        try {
            const user = await this.authService.registerUser(req.body)
            res
              .status(201)
              .send({
                message: `User registered successfully with user name ${user.email}`,
              });
        } catch (error : any) {
            res.status(400).json({message : error.message})         
        }
    }

    async login (req: Request, res : Response) {
        try {
            const accesToken = await this.authService.loginUser(req.body)
            res.status(200).send({ message: `accessToken ${accesToken}` });
        } catch (error : any) {
            res.status(401).json({message : error.message})
        }
    }
}