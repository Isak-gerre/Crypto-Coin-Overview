import { v4 as uuidv4 } from "uuid";
import PostMessage from "../models/postMessage.js";

export const createPost = async (req, res) => {
  const body = req.body;

  const newPost = await PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
