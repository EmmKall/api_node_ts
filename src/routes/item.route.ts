import { Router } from "express";
import { index, findById, store, update, destroy } from '../controllers/item.controller';
import { validSession } from "../middleware/session.middleware";

const router = Router();

router.get( '/', validSession, index);
router.get( '/:id', validSession, findById );
router.post( '/', validSession, store );
router.put( '/:id', validSession, update );
router.delete( '/:id', validSession, destroy );

export { router };
