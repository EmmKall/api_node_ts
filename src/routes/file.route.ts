import { Router } from "express";
import { profileFile } from '../controllers/file.controller';

const router = Router();

router.post( '/profile', profileFile )

export { router };