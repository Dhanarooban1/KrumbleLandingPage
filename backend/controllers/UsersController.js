import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const saveUser = async (req, res) => {
  const { name, email, phone, age, gender } = req.body;

  if (!name || !email || !phone || !age) {
    return res.status(400).json({
      success: false,
      error: "All fields are required",
    });
  }

  try {
    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email.trim().toLowerCase(),
      },
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: "Email already exists",
      });
    }

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email: email.trim().toLowerCase(),
        phone,
        age: Number(age),
        gender,
      },
    });

    return res.status(201).json({
      success: true,
      message: "User saved successfully",
      user,
    });
  } catch (error) {
    console.error("Save User Error:", error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};