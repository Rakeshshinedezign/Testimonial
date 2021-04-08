import mongoose from 'mongoose';

const announcement = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    phone:Number    
})

export default mongoose.model('announcement',announcement);
