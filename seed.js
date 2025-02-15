import mongoose from 'mongoose';
import Habit from './models/Habit.js';
import dotenv from 'dotenv';

dotenv.config();




const userId = new mongoose.Types.ObjectId("67ab9f0c0f0b428730cd43f7"); // Replace with your test user ID

const sampleHabits = [
  {
    name: "Morning Meditation",
    category: "Wellness",
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-03-31'),
    totalDays: 31,
    status: "completed",
    userId: userId,
    completedDates: [
      new Date('2024-03-01'),
      new Date('2024-03-02'),
      new Date('2024-03-03')
    ],
  },
  {
    name: "Evening Workout",
    category: "Fitness",
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-03-31'),
    totalDays: 31,
    status: "ongoing",
    userId: userId,
    completedDates: [
      new Date('2024-03-01'),
      new Date('2024-03-02')
    ],
  },
  {
    name: "Read 30 minutes",
    category: "Learning",
    startDate: new Date('2024-02-15'),
    endDate: new Date('2024-03-15'),
    totalDays: 30,
    status: "failed",
    userId: userId,
    completedDates: [
      new Date('2024-02-15'),
      new Date('2024-02-16')
    ],
  },
  {
    name: "Drink Water",
    category: "Health",
    startDate: new Date('2024-03-10'),
    endDate: new Date('2024-04-10'),
    totalDays: 31,
    status: "pending",
    userId: userId,
    completedDates: [],
  },
  {
    name: "Yoga Practice",
    category: "Wellness",
    startDate: new Date('2024-03-05'),
    endDate: new Date('2024-04-05'),
    totalDays: 31,
    status: "ongoing",
    userId: userId,
    completedDates: [
      new Date('2024-03-05'),
      new Date('2024-03-06'),
      new Date('2024-03-07')
    ],
  },
  {
    name: "Mindful Breathing",
    category: "Wellness",
    startDate: new Date('2024-02-20'),
    endDate: new Date('2024-03-20'),
    totalDays: 30,
    status: "failed",
    userId: userId,
    completedDates: [
      new Date('2024-02-20'),
      new Date('2024-02-21')
    ],
  },
  {
    name: "Gratitude Journal",
    category: "Wellness",
    startDate: new Date('2024-03-15'),
    endDate: new Date('2024-04-15'),
    totalDays: 31,
    status: "pending",
    userId: userId,
    completedDates: [],
  },
  {
    name: "Running",
    category: "Fitness",
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-03-31'),
    totalDays: 31,
    status: "completed",
    userId: userId,
    completedDates: Array.from({length: 31}, (_, i) => new Date(`2024-03-${i + 1}`)),
  },
  {
    name: "Push-ups",
    category: "Fitness",
    startDate: new Date('2024-03-10'),
    endDate: new Date('2024-04-10'),
    totalDays: 31,
    status: "ongoing",
    userId: userId,
    completedDates: [
      new Date('2024-03-10'),
      new Date('2024-03-11'),
      new Date('2024-03-12')
    ],
  },
  {
    name: "Swimming",
    category: "Fitness",
    startDate: new Date('2024-03-15'),
    endDate: new Date('2024-04-15'),
    totalDays: 31,
    status: "pending",
    userId: userId,
    completedDates: [],
  },
  {
    name: "Coding Practice",
    category: "Learning",
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-03-31'),
    totalDays: 31,
    status: "ongoing",
    userId: userId,
    completedDates: [
      new Date('2024-03-01'),
      new Date('2024-03-02'),
      new Date('2024-03-03')
    ],
  },
  {
    name: "Language Study",
    category: "Learning",
    startDate: new Date('2024-02-25'),
    endDate: new Date('2024-03-25'),
    totalDays: 30,
    status: "failed",
    userId: userId,
    completedDates: [
      new Date('2024-02-25'),
      new Date('2024-02-26')
    ],
  },
  {
    name: "Online Course",
    category: "Learning",
    startDate: new Date('2024-03-20'),
    endDate: new Date('2024-04-20'),
    totalDays: 31,
    status: "pending",
    userId: userId,
    completedDates: [],
  },
  {
    name: "Healthy Breakfast",
    category: "Health",
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-03-31'),
    totalDays: 31,
    status: "completed",
    userId: userId,
    completedDates: Array.from({length: 31}, (_, i) => new Date(`2024-03-${i + 1}`)),
  },
  {
    name: "Sleep 8 Hours",
    category: "Health",
    startDate: new Date('2024-03-05'),
    endDate: new Date('2024-04-05'),
    totalDays: 31,
    status: "ongoing",
    userId: userId,
    completedDates: [
      new Date('2024-03-05'),
      new Date('2024-03-06'),
      new Date('2024-03-07')
    ],
  },
  {
    name: "Take Vitamins",
    category: "Health",
    startDate: new Date('2024-03-15'),
    endDate: new Date('2024-04-15'),
    totalDays: 31,
    status: "pending",
    userId: userId,
    completedDates: [],
  },
  {
    name: "No Processed Food",
    category: "Health",
    startDate: new Date('2024-02-20'),
    endDate: new Date('2024-03-20'),
    totalDays: 30,
    status: "failed",
    userId: userId,
    completedDates: [
      new Date('2024-02-20'),
      new Date('2024-02-21')
    ],
  },
  {
    name: "Stretching",
    category: "Fitness",
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-03-31'),
    totalDays: 31,
    status: "ongoing",
    userId: userId,
    completedDates: [
      new Date('2024-03-01'),
      new Date('2024-03-02')
    ],
  },
  {
    name: "Daily Walk",
    category: "Health",
    startDate: new Date('2025-02-15'),
    endDate: new Date('2025-02-18'),
    totalDays: 31,
    status: "ongoing",
    userId: userId,
    completedDates: [
      new Date('2025-02-15'),
      
    ],
  },
  {
    name: "Meditation Journal",
    category: "Wellness",
    startDate: new Date('2025-02-15'),
    endDate: new Date('2025-02-18'),
    totalDays: 31,
    status: "ongoing",
    userId: userId,
    completedDates: [
      new Date('2025-02-15'),
    ],
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing habits for this user
    await Habit.deleteMany({ userId });
    console.log('Cleared existing habits');

    // Insert new habits
    await Habit.insertMany(sampleHabits);
    console.log('Database seeded successfully');

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 