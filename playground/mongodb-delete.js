// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  // in v3 const db = client.db/.'TodoApp';
  if (err) {
    return console.log(`Unable to connect to mongodb server`);
  }
  console.log('Connected to MongoDB server');

  //deleteMany

  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });

  //deleteOne

  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });

  //findOneAndDelete

  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });

  //Using ObjectID

  db.collection('Todos').findOneAndDelete({_id: new ObjectID('5a8bb859cf70753c79234473')}).then(() => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // db.close(); //client.close();
});
