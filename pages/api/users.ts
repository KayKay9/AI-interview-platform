import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../lib/db";
import User from "../../models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "POST") {
    const { name, email, role, level } = req.body;
    const user = new User({ name, email, role, level });
    await user.save();
    res.status(201).json(user);
  } else if (req.method === "GET") {
    const users = await User.find();
    res.status(200).json(users);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
