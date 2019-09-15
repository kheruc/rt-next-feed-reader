import mongoose from 'mongoose';

let mongoDB_uri = 'mongodb://pranav:pranav123@ds125526.mlab.com:25526/feed-reader' 
  // connect to database
if (mongoose.connection.readyState !== 1) {                                                                                                           
  connectToDb();
}
function connectToDb() {
  mongoose
    .connect(mongoDB_uri, {useNewUrlParser: true})
    .then(() => console.log('DB Connected'))
    .catch(err => console.log('There was an error ', err));
}

let User;
try {
  User = mongoose.model('User');
} catch {
  User = require('../../data/model');
}

function filterToken(cookiesArray) {
  return cookiesArray
}

export default async function(req, res) {
  let id = req.headers.cookie.split(' ');
  let token = id.filter(m => m.slice(0, 5) === 'token')[0].slice(6);
  console.log(token);
  if(token.length > 0) {
    let user = await User.findById(token)
      res.send({token, user}) 
  }
  else {
      res.send({mssg: "Please log in"});
  }
}
