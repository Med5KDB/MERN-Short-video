import mongoose from "mongoose";

const shortVideoSchema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    shares: String,
    messages: String
});

export default mongoose.model('shortVideos', shortVideoSchema);

//Here shortVideos is the name of the collection
//We can now use the Schema to create the endpoint that
//adds data to the database