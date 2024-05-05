"use server"
import { connectToDatabase } from "@/lib/db"
import { User } from "./models/user"

export async function loginUser(formData) {
    await connectToDatabase()

    const info = {
        email: formData.get("email"),
        password: formData.get("password"),
    }

    const user = await User.findOne({ email: info.email })

    if (!user) {
        return { error: "User not found" }
    }

    if (user.password !== info.password) {
        return { error: "Incorrect email or password" }
    }

    return { message: "Login successful" }
}

export async function signupUser(formData) {
    await connectToDatabase()

    const info = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    }

    const user = await User.findOne({ email: info.email })

    if (user) {
        return { error: "User already exists" }
    }

    const newUser = await User.create(info)
    await newUser.save()

    return { message: "Signup successful" }
}