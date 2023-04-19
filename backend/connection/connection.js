const mongoose = require("mongoose");

const getConnection = async () => {
  await mongoose.connect(
    "mongodb+srv://imran31051998:pUhmfhndExiIRYEb@cluster0.nle0ecs.mongodb.net/test?retryWrites=true&w=majority"    
  );
  console.log("Connected to database successfully...!");
};

module.exports = getConnection;