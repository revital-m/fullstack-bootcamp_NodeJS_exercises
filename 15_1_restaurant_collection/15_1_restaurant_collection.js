/** 
db.restaurants.insertMany([
  {
    name: "bombay",
    address: {
      city: "Holon",
      street: "Herzel 15",
      coordinates: [-77.46574, 40.6774],
    },
    cuisine: "indian",
    kosher: true,
    reviews: [
      {
        date: new Date("2016-01-01"),
        score: 7,
      },
      {
        date: new Date("2019-01-01"),
        score: 3,
      },
      {
        date: new Date("2018-01-01"),
        score: 8,
      },
    ],
  },
  {
    name: "falafel 5 shekels",
    address: {
      city: "Bat-Yam",
      street: "Histradrut 85",
      coordinates: [-70.46574, 10.6774],
    },
    cuisine: "street food",
    kosher: false,
    reviews: [
      {
        date: new Date("2019-01-01"),
        score: 3,
      },
      {
        date: new Date("2016-01-01"),
        score: 8,
      },
      {
        date: new Date("2020-01-01"),
        score: 4,
      },
    ],
  },
  {
    name: "asian delight",
    address: {
      city: "Tel Aviv",
      street: "Balfur 15",
      coordinates: [-10.46574, 30.6774],
    },
    cuisine: "asian",
    kosher: true,
    reviews: [
      {
        date: new Date("2020-01-01"),
        score: 3,
      },
      {
        date: new Date("2018-01-01"),
        score: 8,
      },
      {
        date: new Date("2016-01-01"),
        score: 9,
      },
    ],
  },
  {
    name: "coconut jam",
    address: {
      city: "Tel Aviv",
      street: "Stam Adress 15",
      coordinates: [20.46574, -40.6774],
    },
    cuisine: "african",
    kosher: true,
    reviews: [
      {
        date: new Date("2017-01-01"),
        score: 10,
      },
      {
        date: new Date("2016-01-01"),
        score: 8,
      },
      {
        date: new Date("2019-01-01"),
        score: 6,
      },
    ],
  },
  {
    name: "rice and noodles",
    address: {
      city: "Holon",
      street: "Bla Bla 15",
      coordinates: [20.46574, 10.6774],
    },
    cuisine: "asian",
    kosher: false,
    reviews: [
      {
        date: new Date("2016-01-01"),
        score: 1,
      },
      {
        date: new Date("2019-01-01"),
        score: 6,
      },
      {
        date: new Date("2019-01-01"),
        score: 2,
      },
    ],
  },
  {
    name: "thailand paradise",
    address: {
      city: "Holon",
      street: "Bla 13",
      coordinates: [-77.46574, 40.6774],
    },
    cuisine: "asian",
    kosher: false,
    reviews: [
      {
        date: new Date("2020-01-01"),
        score: 7,
      },
      {
        date: new Date("2019-01-01"),
        score: 6,
      },
      {
        date: new Date("2020-01-01"),
        score: 2,
      },
    ],
  },
]);
*/

/** 
//! 1. Crud:
//? 1.1 – Write a MongoDb query to display all the documents in the restaurant collection.
db.restaurants.find().pretty()

//? 1.2 - Write a MongoDb query to display all restaurants that have a specific cuisine
db.restaurants.find({cuisine: "asian"}).pretty()

//? 1.3 - Write a MongoDb query that displays only kosher restaurants
db.restaurants.find({kosher: true}).pretty()

//? 1.4 - Write a MongoDb query that displays only a specific cities restaurants
db.restaurants.find({"address.city": "Tel Aviv"}).pretty()

//? 1.5 - Write a MongoDb query to display a specific restaurants address
db.restaurants.find({$and:[{"address.city":"Tel Aviv"},{"address.street":"Stam Adress 15"}]}).pretty()

//? 1.6 - Write a MongoDb query to display a specific restaurants coordinates
db.restaurants.find({"address.coordinates": [20.46574,-40.6774]}).pretty()

//? 1.7. - Write a MongoDb query that should display all restaurants in ascending order by restaurant name.
db.restaurants.find().sort({"name":1}).pretty()

//? 1.8 - Write a MongoDb query that should display all restaurants in ascending order by city names.
db.restaurants.find().sort({"address.city":1}).pretty()

//? 1.9 - Update a specific restaurant's name
db.restaurants.updateOne({"_id": ObjectId("61e540eed7b1cd27f48d31b2")}, {$set: {"name": "coconut"}})

//? 1.10 - Update a specific restaurant by adding a new review.
db.restaurants.updateOne({"_id": ObjectId("61e540eed7b1cd27f48d31b2")}, {$push: {"reviews": {"date": new Date(),score: 5}}})

//? 1.11 - Update all restaurants to be kosher
db.restaurants.updateMany({},{$set: {kosher: true}})

//? 1.12 - Delete a specific restaurant
db.restaurants.deleteOne({"_id":ObjectId("61e540eed7b1cd27f48d31b2")})

//? 1.13 - Delete all restaurants
db.restaurants.deleteMany({})

//! 2. forEach Queries. use the forEach cursor method to query the following:
//? 2.1 - Write a MongoDb query to print all restaurant names.
db.restaurants.find().forEach(item => print(item.name))

//? 2.2 - Write a MongoDb query to print all restaurant cities
 db.restaurants.find().forEach(item => print(item.address.city))

//? 2.3 - Write a MongoDb query to print all restaurant coordinates
db.restaurants.find().forEach(item => print(item.address.coordinates))

//! 3. Advanced Queries:
//? 3.1 - Query for restaurant names that start with a specific alphabet
db.restaurants.find({name: /^a/}).pretty()

//? 3.2 - Query how many documents you have from the restaurant collection.
db.restaurants.find().count()

//? 3.3 - Write a MongoDb query to get restaurants that include reviews from a specific date.
db.restaurants.find({"reviews.date": {$in: [ISODate("2016-01-01T00:00:00Z")]}}).pretty()

*/
