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
  let password = bcryptjs.hashSync(reqBody.password, 10);
  //console.log(reqBody);
  console.log([...feeds]);
  let userExists = await User.findOne({email: reqBody.email})
  if(userExists) {
    res.send({mssg: 'User already exists'})
  }
  else {
  let user = new User({...JSON.parse(req.body), password, feeds: [...feeds]});
  user.save()
    .then(res => console.log(res)).catch(err => console.log(err));
  res.send({mssg: 'User Registered'})
  }
}

