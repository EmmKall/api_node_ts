import "dotenv/config";
import express from "express";
import cors from 'cors';
import db from './conf/mongo';

import { router } from './routes/index.route';

const app = express();

const PORT = process.env.PORT || 3001;
app.use( cors() );
app.use( express.json() );
db().then( () => console.log( 'Conection ready' ) );

app.use( '/', router );

app.listen( PORT, () => {
    console.log( `Listening on port: ${PORT}` );
});

