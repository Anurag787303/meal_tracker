"use server"
import { connectToDatabase } from "@/lib/db"
import { User } from "./models/user"
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const SECRET_KEY = process.env.NODE_PUBLIC_JWT_SECRET_KEY; // Make sure to set this environment variable

const convertStringToDate = function (str) {
    const timestamp = Date.parse(str);
    const date = new Date(timestamp);

    // Convert the date to the IST time zone
    const istDate = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    return istDate;
}

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

export async function createDay(formData) {
    await connectToDatabase()

    const token = cookies().get('token')

    const decoded = jwt.verify(token.value, SECRET_KEY)

    const user = await User.findOne({ _id: decoded.userId })

    const day = {
        name: formData.get("name"),
        date: convertStringToDate(formData.get("date")), // Date.parse here
        meals: []
    }

    console.log(day, day.date.getTime(), (new Date()).getTime())

    // user.days.push(day)
    // await user.save()

    // return { message: "Day created" }
}

export async function createMeal(formData) {
    await connectToDatabase()

    const token = cookies().get('token')

    const decoded = jwt.verify(token.value, SECRET_KEY)

    const user = await User.findOne({ _id: decoded.userId })

    const day = user.days.find(day => day._id === formData.get("day"))

    const meal = {
        name: formData.get("name"),
        time: formData.get("time"),
        items: formData.getAll("items")
    }

    day.meals.push(meal)
    await user.save()

    return { message: "Meal created" }
}

export async function addBaseItem(formData) {
    await connectToDatabase()

    const token = cookies().get('token')

    const decoded = jwt.verify(token.value, SECRET_KEY)

    const user = await User.findOne({ _id: decoded.userId })

    const item = {
        name: formData.get("name"),
        calorie: formData.get("calorie"),
        image: formData.get("image")
    }

    user.items.push(item)
    await user.save()

    return { message: "Item added" }
}