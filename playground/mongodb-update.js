// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  // in v3 const db = client.db/.'TodoApp';
  if (err) {
    return console.log(`Unable to connect to mongodb server`);
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a8bb859cf70753c79234473')
  }, {
    $set: {                       // $set is an update operator used by mongodb
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a8bb859cf70753c79234473')
  }, {
    $set: {                       // $set is an update operator used by mongodb
      name: 'Vooo'
    },
    $inc: {                       // inc is for increamenting  
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close(); //client.close();
});
