import "dotenv/config";
import { connect } from "mongoose";

async function dbConection(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI;
    try{
        await connect( DB_URI );
    } catch( error ){
        console.log( 'Error to connect db' );
    }
}

export default dbConection;
