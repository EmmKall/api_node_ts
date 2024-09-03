import { Request, Response, Router } from "express";
import { index, findById, store, update, destroy } from '../controllers/item.controller';

const router = Router();

router.get( '/', index);
router.get( '/:id', findById );
router.post( '/', store );
router.put( '/:id', update );
router.delete( '/:id', destroy );

export { router };

