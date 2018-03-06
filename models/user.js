const bcrypt = require('bcrypt-nodejs');



module.exports = function (mongoose) {
const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        username: {
              type: String,
              unique: true,
              required: true
          },
        password: {
              type: String,
              required: true
          }
      });
      
      UserSchema.pre('save', function (next) {
          var user = this;
          if (this.isModified('password') || this.isNew) {
              bcrypt.genSalt(10, function (err, salt) {
                  if (err) {
                      return next(err);
                  }
                  bcrypt.hash(user.password, salt, null, function (err, hash) {
                      if (err) {
                          return next(err);
                      }
                      console.log("******************************")
                      user.password = hash;
                      console.log(user)
                      next();
                  });
              });
          } else {
              return next(undefined, user);
          }
      });
      
      UserSchema.methods.comparePassword = function (passw, cb) {
          bcrypt.compare(passw, this.password, function (err, isMatch) {
              if (err) {
                  return cb(err);
              }
              cb(null, isMatch);
          });
      };

      const User = mongoose.model('User', UserSchema);
      return User;
};




