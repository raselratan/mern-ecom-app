const bcrypt = require("bcryptjs");
const { model, Schema } = require("mongoose");
const { defaultAvater } = require("../secrete");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Maximum length 100 characters"],
      minlength: [3, "Minimum length 3 characters"],
    },
    email: {
      type: String,
      required: [true, "Name is required"],
      unique: [true, "Email already exists"],
      trim: true,
      lowercase: true,
      validate: {
        validator: (v) => {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
        },
        message: "Enter valid email.",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Minimum length 6s characters"],
      set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(12)),
    },
    image: {
      type: String,
      default: defaultAvater,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      maxlength: [20, "Maximum length 20 characters"],
      minlength: [10, "Minimum length 10 characters"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBand: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("Users", userSchema);

module.exports = User;
