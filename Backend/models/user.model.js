const mongoose= require('mongoose');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken')
const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, "Emailmust be at least 5 characters long"],
  },
  password: {
    type: String,
    required: true,
    select:false,
    //so that when we find user the password isn't shared
  },
  //we will use jwt token for password authentication
  /**
   * what is jwt token?
   * https://auth0.com/docs/secure/tokens/json-web-tokens
   */
  socketId:{
    type:String,
  },
  //to track location of driver
})

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET);
  return token;
}

userSchema.methods.comparePassword= async function (password){
  return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('user', userSchema);

module.exports= userModel;