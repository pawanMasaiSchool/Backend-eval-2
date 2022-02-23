const express = require('express');
const app = express();
const cors = require('cors');
const dbConnection = require('./Config/db');
const userController = require('./controllers/user.controller')
const lecturesController = require('./controllers/lectures.controller')
const PORT = 8000;
const {signup,signin} = require("./controllers/auth.controller")

app.use(cors());
app.use(express.json())
app.use(express.urlencoded());
app.post("/signup", signup);
app.post("/signin", signin);
app.use("/users",userController);
app.use("/lectures",lecturesController);



const initializingApp = async () => {
    await dbConnection();
    console.log(`connection to DB is now established`);

    app.listen( PORT, ()=> {
        console.log(`listening to the port ${PORT}`);
    })
}

initializingApp()