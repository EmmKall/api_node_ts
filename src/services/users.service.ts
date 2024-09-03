import { User } from "../interface/user.interface";
import UserModel from "../models/user.module";

const indexS = async() => {
    return UserModel.find();
};

const findByIdS = async( id: string ) => {
    const item = await UserModel.findById( id );
    return item;
}

const storeS = async( user: User ) => {
    const data = await UserModel.create( user );
    return data;
}

const updateS = async( user: User, id: string ) => {
    const row = await UserModel.findOneAndUpdate(
        { _id: id },
        user,
        { new: true }
    );
    return row;
}

const destroyS = async( id: string ) => {
    const rows = await UserModel.findByIdAndDelete( id );
    return rows;
}

export {
    indexS,
    findByIdS,
    storeS,
    updateS,
    destroyS
};
