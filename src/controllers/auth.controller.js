import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import config from "../config/config.js";
import {
  generateAccessToken,
  generateRefreshToken
} from "../utils/generateTokens.js";

export const register = async (req, res) => {

  try {

    const { username, email, password } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }
};

export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res.json({
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }
};

export const refreshToken = (req, res) => {

  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Refresh token required"
    });
  }

  try {

    const decoded = jwt.verify(
      refreshToken,
      config.JWT_REFRESH_SECRET
    );

    const newAccessToken = generateAccessToken(decoded.id);

    res.json({
      accessToken: newAccessToken
    });

  } catch (error) {

    res.status(403).json({
      message: "Invalid refresh token"
    });

  }
};

export const getMe = async (req, res) => {

  try {

    const user = await User
      .findById(req.user)
      .select("-password");

    res.json({ user });

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }
};