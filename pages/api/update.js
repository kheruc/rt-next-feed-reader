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

export default async function(req, res){
let cookie = req.headers.cookie.split(' ');
let id = cookie.filter(m => m.slice(0, 5) === 'token')[0].slice(6);
let feeds = JSON.parse(req.body);   
  console.log(feeds);
  User.findByIdAndUpdate(id, {
    feeds: [...feeds]
  }, function(err, user) {
    if(err){ res.send({mssg: err})}
    else{
      res.send({user, mssg: 'Saved'})
    }
  })
}
