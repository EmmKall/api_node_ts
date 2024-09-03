import { Item } from "../interface/item.interface";
import ItemModel from "../models/items.module";

const indexS = async() => {
    return ItemModel.find();
};

const findByIdS = async( id: string ) => {
    const item = await ItemModel.findById( id );
    return item;
}

const storeS = async( item: Item ) => {
    const data = await ItemModel.create( item );
    return data;
}

const updateS = async( item: Item, id: string ) => {
    const row = await ItemModel.findOneAndUpdate(
        { _id: id },
        item,
        { new: true }
    );
    return row;
}

const destroyS = async( id: string ) => {
    const rows = await ItemModel.findByIdAndDelete( id );
    return rows;
}

export {
    indexS,
    findByIdS,
    storeS,
    updateS,
    destroyS
};
