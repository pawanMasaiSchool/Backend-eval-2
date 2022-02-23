const mongoose = require('mongoose');

const dbConnection = () => {
    return mongoose.connect("mongodb://localhost:27017/backend-eval-2")
}

module.exports = dbConnection