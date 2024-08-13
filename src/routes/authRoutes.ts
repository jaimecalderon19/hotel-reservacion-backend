import { Router } from 'express';
import AuthController from '../controllers/authController';

const router = Router();
const authController =  AuthController;

router.post('/register', authController.register);
router.post('/login', authController.login);


export default router;