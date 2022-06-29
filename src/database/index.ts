import mongoose from "mongoose";

mongoose.connect(
    process.env.MONGO_URL!
)
.then(() => {
    console.log('Mongo Connected!')
})
.catch(err => console.log(err));