import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User, { type IUser } from '../models/userModel';

class AuthController {
  private jwtSecret: string;

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || 'your-secret-key';
  }

  public register = async (req: Request, res: Response): Promise<void> => {
    try {
      const { username, lastName, firstName, phoneNumber, email, password } = req.body;

      const existingUser = await User.findOne({ $or: [{ email }, { phoneNumber }] });
      if (existingUser) {
        console.log("error user exist");
        
        res.status(400).json({ message: 'Email or phone already in use' });
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber,
      });

      await newUser.save();

      const token = this.generateToken(newUser);

      res.status(201).json(this.respondWithToken(token, newUser));
    } catch (error) {
      console.log(error);
      
      res.status(500).json({ message: 'Error registering user', error });
    }
  };

  public login = async (req: Request, res: Response): Promise<void> => {
    await this.authenticateUser(req, res);
  };


  private authenticateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(401).json({ message: 'Invalid credentials' });
        return;
      }

     const token = this.generateToken(user);

      res.json(this.respondWithToken(token, user));
    } catch (error) {
      res.status(500).json({ message: 'Error during login', error });
    }
  };

  private generateToken(user: IUser): string {
    return jwt.sign({ id: user._id }, this.jwtSecret, { expiresIn: '172h' });
  }

  private respondWithToken(token: string, user: IUser) {
    return {
      access_token: token,
      token_type: 'bearer',
      expires_in: 3600, // 1 hour
      user,
    };
  }
}

export default new AuthController();