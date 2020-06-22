const { Schema } = require('mongoose');

const mongoose = require('mongoose');

const useSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', useSchema);

module.exports = User;
