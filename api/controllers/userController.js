import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Function to create a JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    // Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validate email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password" });
    }

    // Hash the user's password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Admin login placeholder function
const adminLogin = async (req, res) => {
  try {
    const {email, password} = req.body
    if (email=== process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) 
      { const token= jwt.sign (email+password, process.env.JWT_SECRET); 
        res.json({success: true, token})
    } 
  else {
    res.json({success: false, message: "Invalid credentials"})
    }
   
} catch (error) {
    }
};

export { loginUser, registerUser, adminLogin };
