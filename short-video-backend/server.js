import express from 'express';
import mongoose from 'mongoose';
//Importation du Cross Origin Resource Sharing 
import Cors from 'cors';
import Videos from './dbModel.js';

//API Config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = "mongodb+srv://Mings:kdb17Goat@cluster0.zzf8bsl.mongodb.net/?retryWrites=true&w=majority";


// Express is a built-in middleware function 
app.use(express.json()); // It parses incoming JSON requests and puts the parsed data in req.body
app.use(Cors());
//DB Config

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
},(err) => {
    if (err) {
        return console.log("Error: " + err);
    }
    console.log("Connected to MongoDB");
})
//API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello TheWebDev"));
app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body;
    console.log(dbVideos);
    // the create method is to send dbVideos
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }        
        else
            res.status(201).send("Data well registered:" +data)
        }
    )
})
app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })   
})

//Listener
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));

//The line "type" : "module" in package.json file  is required to have React-like imports enabled in Node.js
