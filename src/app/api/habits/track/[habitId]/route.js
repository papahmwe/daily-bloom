import connectDB from '../../../../../lib/db'
import Habit from '../../../../../../models/Habit'
import { User } from '../../../../../../models/User'
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {    
    const { habitId } = params;
    const { completedDates, userId } = await request.json();
    
    try {
        await connectDB();
        
        // Find the habit to get total days
        const habit = await Habit.findById(habitId);
        const totalDays = habit.totalDays;
        
        // Determine habit status
        let habitStatus = '';
        let pointsAwarded = 0;

        console.log("completedDates", completedDates)
        console.log("totalDays", totalDays)
        
        if (completedDates.length == totalDays) {
            habitStatus = 'completed';
            pointsAwarded = 50; // Points awarded for completing habit
            
            // Update user's points
            await User.findByIdAndUpdate(
                userId,
                { $inc: { points: pointsAwarded } },
                { new: true }
            );
        } else if (completedDates.length > 0) {
            habitStatus = 'ongoing';
        } else {
            habitStatus = 'pending';
        }
        
        // Update the habit
        const updatedHabit = await Habit.findByIdAndUpdate(
            habitId,
            { completedDates, status: habitStatus },
            { new: true }
        );
        
        return NextResponse.json({
            habit: updatedHabit,
            pointsAwarded: pointsAwarded
        });
        
    } catch (error) {
        console.error("Error updating habit:", error);
        return NextResponse.json(
            { error: "Failed to update habit" },
            { status: 500 }
        );
    }
}

