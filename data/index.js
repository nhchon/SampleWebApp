(function(data) {
  var MongoClient = require('mongodb').MongoClient;
  var URL = "mongodb://localhost:27017/userdb";

  data.getUsers = function(userName, callBack) {
    MongoClient.connect(URL, function(err, client) {
      if (err) callBack(err);

      const db = client.db('userdb');
      var userCollection = db.collection('user');
      userCollection.findOne({ name: userName }, callBack);
    });
  }
})(module.exports)
