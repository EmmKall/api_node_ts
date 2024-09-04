import { NextFunction, Request, Response } from "express";


const logMiddleware  = ( req: Request, res: Response , next: NextFunction ) => {
    const header = req.headers;
    console.log( header["user-agent"] );
    next();
}

export { logMiddleware };
