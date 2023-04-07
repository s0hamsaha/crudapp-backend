const mongoose = require('mongoose');

const DB="mongodb+srv://soham:sohamsaha@cluster0.nsy7wmi.mongodb.net/merncrud?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Connection Started")).catch((error)=> console.log(error.message));