import mongoose from 'mongoose'

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://vickysain817_db_user:vicky8790@binkeyit.kljk41b.mongodb.net/food-del')
    .then(()=>console.log("DB Connected"));
}