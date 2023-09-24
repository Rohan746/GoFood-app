const mongoose = require('mongoose');
const mongoURI = 'mongodb://gofood:gofood@ac-nkgnyff-shard-00-00.n8dknng.mongodb.net:27017,ac-nkgnyff-shard-00-01.n8dknng.mongodb.net:27017,ac-nkgnyff-shard-00-02.n8dknng.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-fxviz6-shard-0&authSource=admin&retryWrites=true&w=majority';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    const db = mongoose.connection;
    const foodCollection = db.collection("food_items");
    const categoryCollection = db.collection("Categories");

    const data = await foodCollection.find({}).toArray();
    const Catdata = await categoryCollection.find({}).toArray();

    return { data, Catdata };
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
};

module.exports = connectToDatabase;
