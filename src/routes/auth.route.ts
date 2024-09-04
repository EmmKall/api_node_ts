import { Router } from "express";
import { login, logout, register, confirmEmail } from '../controllers/auth.controller';

const router = Router();

router.post( '/login', login );
router.post( '/register', register );
router.post( '/logout', logout );
router.post( '/logout', confirmEmail );

export { router };
