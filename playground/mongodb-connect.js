// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// Object destructuring
// var user = {name: 'vibhu', age: 25};
// var {name} = user;
// console.log(name);

// In mongodb we can simply give a name and new database will be created like TodoApp
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  // in v3 const db = client.db/.'TodoApp';
  if (err) {
    return console.log(`Unable to connect to mongodb server`);
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log(`Unable to insert todo`, err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc User(name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Vibhu',
  //   age: '19',
  //   location: 'Delhi'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log(`Unable to insert user`, err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });

  db.close(); //client.close();
});
