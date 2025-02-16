import mongoose from 'mongoose';
import Habit from './models/Habit.js';
import dotenv from 'dotenv';

dotenv.config();




const userId = new mongoose.Types.ObjectId("67ab9f0c0f0b428730cd43f7"); // Replace with your test user ID

const sampleHabits = [
  {
    name: "Morning Meditation",
    category: "Wellness",
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    totalDays: 31,
    status: "completed",
    userId: userId,
    completedDates: Array.from({ length: 31 }, (_, i) => new Date(`2025-01-${i + 1}`)),
  },
  {
    name: "Evening Workout",
    category: "Fitness",
    startDate: new Date('2025-01-15'),
    endDate: new Date('2025-02-15'),
    totalDays: 31,
    status: "failed",
    userId: userId,
    completedDates: [
      ...Array.from({ length: 17 }, (_, i) => {
        const date = new Date('2025-01-15');
        date.setDate(date.getDate() + i);
        return date;
      })
    ],
  },
  {
    name: "Read 30 minutes",
    category: "Learning",
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    totalDays: 31,
    status: "completed",
    userId: userId,
    completedDates: Array.from({ length: 31 }, (_, i) => new Date(`2025-01-${i + 1}`)),
  },
  {
    name: "Drink Water",
    category: "Health",
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-02-28'),
    totalDays: 28,
    status: "ongoing",
    userId: userId,
    completedDates: Array.from({ length: 16 }, (_, i) => new Date(`2025-02-${i + 1}`)),
  },
  {
    name: "Yoga Practice",
    category: "Wellness",
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    totalDays: 31,
    status: "failed",
    userId: userId,
    completedDates: Array.from({ length: 10 }, (_, i) => new Date(`2025-01-${i + 1}`)),
  },
  {
    name: "Mindful Breathing",
    category: "Wellness",
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    totalDays: 31,
    status: "completed",
    userId: userId,
    completedDates: Array.from({ length: 31 }, (_, i) => new Date(`2025-01-${i + 1}`)),
  },
  {
    name: "Gratitude Journal",
    category: "Wellness",
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-02-28'),
    totalDays: 28,
    status: "ongoing",
    userId: userId,
    completedDates: Array.from({ length: 15 }, (_, i) => new Date(`2025-02-${i + 1}`)),
  },
  {
    name: "Running",
    category: "Fitness",
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    totalDays: 31,
    status: "completed",
    userId: userId,
    completedDates: Array.from({ length: 31 }, (_, i) => new Date(`2025-01-${i + 1}`)),
  },
  {
    name: "Push-ups",
    category: "Fitness",
    startDate: new Date('2025-01-15'),
    endDate: new Date('2025-02-15'),
    totalDays: 31,
    status: "failed",
    userId: userId,
    completedDates: Array.from({ length: 20 }, (_, i) => {
        const date = new Date('2025-01-15');
        date.setDate(date.getDate() + i);
        return date;
    }),
  },
  {
    name: "Swimming",
    category: "Fitness",
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-02-28'),
    totalDays: 28,
    status: "ongoing",
    userId: userId,
    completedDates: Array.from({ length: 14 }, (_, i) => new Date(`2025-02-${i + 1}`)),
  },
  {
    name: "Coding Practice",
    category: "Learning",
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    totalDays: 31,
    status: "completed",
    userId: userId,
    completedDates: Array.from({ length: 31 }, (_, i) => new Date(`2025-01-${i + 1}`)),
  },
  {
    name: "Language Study",
    category: "Learning",
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    totalDays: 31,
    status: "failed",
    userId: userId,
    completedDates: Array.from({ length: 20 }, (_, i) => new Date(`2025-01-${i + 1}`)),
  },
  {
    name: "Online Course",
    category: "Learning",
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-02-28'),
    totalDays: 28,
    status: "ongoing",
    userId: userId,
    completedDates: Array.from({ length: 16 }, (_, i) => new Date(`2025-02-${i + 1}`)),
  },
  {
    name: "Healthy Breakfast",
    category: "Health",
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    totalDays: 31,
    status: "completed",
    userId: userId,
    completedDates: Array.from({ length: 31 }, (_, i) => new Date(`2025-01-${i + 1}`)),
  },
  {
    name: "Sleep 8 Hours",
    category: "Health",
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    totalDays: 31,
    status: "failed",
    userId: userId,
    completedDates: Array.from({ length: 15 }, (_, i) => new Date(`2025-01-${i + 1}`)),
  },
  {
    name: "Take Vitamins",
    category: "Health",
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    totalDays: 31,
    status: "completed",
    userId: userId,
    completedDates: Array.from({ length: 31 }, (_, i) => new Date(`2025-01-${i + 1}`)),
  },
  {
    name: "No Processed Food",
    category: "Health",
    startDate: new Date('2025-01-15'),
    endDate: new Date('2025-02-15'),
    totalDays: 31,
    status: "failed",
    userId: userId,
    completedDates: Array.from({ length: 20 }, (_, i) => {
        const date = new Date('2025-01-15');
        date.setDate(date.getDate() + i);
        return date;
    }),
  },
  {
    name: "Stretching",
    category: "Fitness",
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    totalDays: 31,
    status: "completed",
    userId: userId,
    completedDates: Array.from({ length: 31 }, (_, i) => new Date(`2025-01-${i + 1}`)),
  },
  {
    name: "Daily Walk",
    category: "Health",
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-02-28'),
    totalDays: 28,
    status: "ongoing",
    userId: userId,
    completedDates: Array.from({ length: 16 }, (_, i) => new Date(`2025-02-${i + 1}`)),
  },
  {
    name: "Meditation Journal",
    category: "Wellness",
    startDate: new Date('2025-01-15'),
    endDate: new Date('2025-02-15'),
    totalDays: 31,
    status: "failed",
    userId: userId,
    completedDates: Array.from({ length: 20 }, (_, i) => {
        const date = new Date('2025-01-15');
        date.setDate(date.getDate() + i);
        return date;
    }),
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