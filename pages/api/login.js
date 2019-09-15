import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import feeds from '../../data/feeds';

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

export default async function(req, res) {
  let reqBody = JSON.parse(req.body);

  let user = await User.findOne({email : reqBody.email});
  if(!user) {
    res.send({mssg: 'User not found'})
  }
  else {
    let validPass = bcryptjs.compareSync(reqBody.password, user.password);
    if(validPass) {
      res.send({mssg: 'Logged In', token: user._id});
    } 
    else {
      res.send({mssg: 'Incorrect Password'});
    }
  }
}

