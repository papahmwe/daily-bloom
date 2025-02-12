import { NextResponse } from "next/server";
import connectDB from '../../../lib/db'
import Habit from '../../../../models/Habit'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


// CREATE - POST /api/habits by a user  
export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();
        console.log(body)
        const totalDays = new Date(body.endDate) - new Date(body.startDate) + 1 
        const habit = new Habit({
            ...body,
            status: 'pending',
            totalDays: totalDays,
            startDate: new Date(body.startDate),
            endDate: new Date(body.endDate)
        })
        try{
        await habit.save()
        return NextResponse.json(habit, { status: 201 })    
        } catch (error) {
            console.error("Error creating habit:", error);
            return NextResponse.json(
                { error: "Failed to create habit" },
                { status: 500 }
            );
        }
        
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create habit" },
            { status: 500 }
        );
    }
}

// READ ALL - GET /api/habits of a user
export async function GET() {


    try {
        await connectDB();
        const habits = await Habit.find();
        return NextResponse.json(habits);
        
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch habits" },
            { status: 500 }
        );
    }
}

// UPDATE - PUT /api/habits/:id
export async function PUT(request) {
    const body = await request.json();
    console.log(body)
    try{
        await connectDB();
        const habit = await Habit.findByIdAndUpdate(body._id, body, { new: true });
        return NextResponse.json(habit);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update habit" },
            { status: 500 }
        );
    }
}

