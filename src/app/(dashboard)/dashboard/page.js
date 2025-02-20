import React from 'react';

const DashboardPage = () => {
    // Dummy data for habit tracking
    const habits = [
        { id: 1, name: 'Exercise', completed: 25, target: 30 },
        { id: 2, name: 'Read', completed: 7, target: 7 },
        { id: 3, name: 'Meditate', completed: 20, target: 30 },
    ];

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-5">Habit Tracking Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Habit Summary Cards */}
                {habits.map(habit => (
                    <div key={habit.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="w-2/3">
                                    <div className="text-gray-700 font-semibold text-lg">{habit.name}</div>
                                    <div className="text-2xl font-bold text-gray-900">{habit.completed}/{habit.target}</div>
                                </div>
                                <div className="w-1/3 text-right">
                                    {/* Placeholder for progress indicator */}
                                    <svg className="h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 px-5 py-3 text-sm text-gray-600">
                            Progress: {(habit.completed / habit.target * 100).toFixed(0)}%
                        </div>
                    </div>
                ))}

                {/* Recent Activity Card */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden md:col-span-2 lg:col-span-1">
                    <div className="p-5">
                        <div className="text-gray-700 font-semibold text-lg mb-3">Recent Activity</div>
                        <ul>
                            <li className="py-2 border-b border-gray-200">
                                <div className="text-gray-800">Completed Exercise</div>
                                <div className="text-sm text-gray-500">5 minutes ago</div>
                            </li>
                            <li className="py-2 border-b border-gray-200">
                                <div className="text-gray-800">Read for 30 minutes</div>
                                <div className="text-sm text-gray-500">30 minutes ago</div>
                            </li>
                            <li className="py-2">
                                <div className="text-gray-800">Meditated</div>
                                <div className="text-sm text-gray-500">1 hour ago</div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Reports Card */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:col-span-1">
                    <div className="p-5">
                        <div className="text-gray-700 font-semibold text-lg mb-3">Reports</div>
                        <div className="text-gray-600">
                            <p>Weekly Progress: <a href="#" className="text-blue-500 hover:underline">Download</a></p>
                            <p>Monthly Summary: <a href="#" className="text-blue-500 hover:underline">Download</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Additional Content */}
            <div className="mt-6 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Habit Analytics</h2>
                    {/* Placeholder for charts or graphs */}
                    <div className="text-gray-600">
                        Detailed habit analytics and visualizations will be displayed here.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;