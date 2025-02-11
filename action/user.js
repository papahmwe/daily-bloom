"use server";

import connectDB from '../lib/db'
import { User } from "../models/User";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { compare } from "bcryptjs";

const login = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await connectDB();
    const user = await User.findOne({ email }).select("+password");

    if (!user || !user.password) {
      return "Invalid email or password";
    }

    const isMatched = await compare(password, user.password);
    if (!isMatched) {
      return "Invalid email or password";
    }

    redirect("/");
  } catch (error) {
    console.error("Login error:", error);
    return "An error occurred during login";
  }
};

const register = async (formData) => {
  const username = formData.get("username") ;
  const password = formData.get("password") ;
  const email = formData.get("email") ;

  if (!username || !password || !email) {
    throw new Error("Please fill all fields");
  }

  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await hash(password, 12);

  await User.create({ username, password: hashedPassword, email });
  console.log(`User created successfully 🥂`);
  redirect("/login");
  
};

const fetchAllUsers = async () => {
  await connectDB();
  const users = await User.find({});
  return users;
};

export { register, login, fetchAllUsers };
