"use server"
import { connectToDatabase } from "@/lib/db"
import { User } from "./models/user"
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const SECRET_KEY = process.env.NODE_PUBLIC_JWT_SECRET_KEY; // Make sure to set this environment variable

async function generateToken(user) {
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: process.env.NODE_PUBLIC_COOKIE_EXPIRE });
    return token;
}

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

    // Generate JWT token
    const token = await generateToken(user);

    cookies().set({
        name: 'token',
        value: token,
        httpOnly: true,
        path: '/',
    })

    redirect('/dashboard')
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

    // Generate JWT token
    const token = await generateToken(newUser);

    cookies().set({
        name: 'token',
        value: token,
        httpOnly: true,
        path: '/',
    })

    redirect('/dashboard')
}

export async function logoutUser() {
    cookies().delete('token')

    redirect('/')
}

export async function isAuthenticated() {
    await connectToDatabase()

    const token = cookies().get('token')

    if (!token) {
        return false
    }

    try {
        jwt.verify(token.value, SECRET_KEY)
        return true
    } catch (error) {
        return false
    }

}

export async function getUserDetails() {
    await connectToDatabase()

    const token = cookies().get('token')

    if (!token) {
        return { error: "No token found" }
    }

    const decoded = jwt.verify(token.value, SECRET_KEY)

    const user = await User.findOne({ _id: decoded.userId })

    if (!user) {
        return { error: "User not found" }
    }

    return {
        username: user.username,
        email: user.email,
    }
} 