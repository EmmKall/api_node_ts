import { Schema, Types, model, Model } from 'mongoose';
import { Item } from '../interface/item.interface';

const ItemSchema = new Schema<Item>(

    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }

);
//enum: ['val1', val2', 'val3' ]
const ItemModel = model( 'items', ItemSchema );
export default ItemModel;
