const mongoose = require('mongoose');

const url = "mongodb+srv://ullaharshullah:Arsh@2004@cluster0.kgaxh.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"

// asyncoronous function = return krte hai promise object  promise object or ham jab use jab hame path nhi hota hai kab function execute hoga 
mongoose.connect(url)
.then((result) => {  // then jab chalega jab complete hojayegA ya execute ho jayega 
 console.log('connected to db');
    
}).catch((err) => {
    console.log(err);
    
});

// console.log('some other statement');
module.exports = mongoose;
