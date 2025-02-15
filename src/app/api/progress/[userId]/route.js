import { NextResponse } from 'next/server'
import connectDB from '../../../../lib/db'
import Habit from '../../../../../models/Habit'
import mongoose from 'mongoose'


export async function GET(request, { params }) {
    const { userId } = await params

    try {
        await connectDB()
        const habits = await Habit.find({ userId })
        const completedHabits = habits.filter(habit => habit.status === 'completed')
        const totalHabits = habits.length
        const completedHabitsPercentage = Math.round((completedHabits.length / totalHabits) * 100)

        const categories = await Habit.aggregate([
            {
                $match: {
                    userId: new mongoose.Types.ObjectId(userId),
                    createdAt: { $gte: new Date(new Date().setMonth(new Date().getMonth() - 1)) }
                }
            },
            {
                $group: {
                    _id: "$category",
                    count: { $sum: 1 }
                }   
            }
        ])
        const recentlyCompletedHabits = await Habit.find({ userId , status: 'completed' }).sort({ createdAt: -1 }).limit(4)

        return NextResponse.json({
            totalHabits,
            completedHabitsPercentage,
            categories,
            recentlyCompletedHabits
        }, { status: 200 })
        } catch (error) {
        console.error('Error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
