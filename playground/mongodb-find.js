// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



// In mongodb we can simply give a name and new database will be created like TodoApp
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  // in v3 const db = client.db/.'TodoApp';
  if (err) {
    return console.log(`Unable to connect to mongodb server`);
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a8b1076dbec863e98b76c8b')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(`Unable to fetch todos`, err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log(`Unable to fetch todos`, err);
  });

  db.collection('Users').find({name: 'Vibhu'}).count().then((count) => {
    console.log(`Users count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch', err);
  });

  db.collection('Users').find({name: 'Vibhu'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.close(); //client.close();
});
