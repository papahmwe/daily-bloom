"use client";
import Image from "next/image";
import { Pencil, Flame, Droplets, Dumbbell } from "lucide-react";
import { Camera } from "lucide-react";
import { useState } from "react";
import { ChangePasswordDialog } from "@/components/Dashboard_Home/change-password-box";
import { DeleteAccountDialog } from "@/components/Dashboard_Home/delete_account";
import { AchievementDialog } from "@/components/Dashboard_Home/achievement";

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen_delete, setIsOpen_delete] = useState(false);
  const [isOpen_notification, setIsOpen_notification] = useState(true);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleOpen_delete = () => {
    setIsOpen_delete(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Header Section */}
        <div className="p-6 border-2 border-purple-200 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/assets/images/auth/signup1.png"
                  alt="User avatar"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <button className="absolute bottom-0 right-0 rounded-full bg-white p-1.5 shadow-lg">
                  <Camera className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">User Name</h2>
                <div className="flex items-center gap-2 rounded-lg bg-purple-100 px-4 py-2">
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-purple-600">1250 Points</span>
                </div>
              </div>
            </div>
            <button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-purple-300 rounded-lg hover:bg-purple-50 hover:text-purple-700 hover:border-purple-400 transition-all duration-200 ease-in-out shadow-sm hover:shadow active:scale-90">
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </button>
          </div>
        </div>

        {/* Personal Information */}
        <div className="p-6 border-2 border-purple-200 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-purple-300 rounded-lg hover:bg-purple-50 hover:text-purple-700 hover:border-purple-400 transition-all duration-200 ease-in-out shadow-sm hover:shadow active:scale-90">
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm text-gray-500">Full Name</label>
              <p className="font-medium">Scarlet Latter</p>
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-500">Password</label>
              <p className="font-medium">********</p>
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-500">Email</label>
              <p className="font-medium">scarlet@gmail.com</p>
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-500">Gender</label>
              <p className="font-medium">Female</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              className="sm:order-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-white hover:bg-red-600 rounded-lg transition-all duration-200 ease-in-out shadow-sm hover:shadow-md active:scale-95 border border-red-600"
              onClick={handleOpen_delete}>
              Delete Account
            </button>
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-[#8678FB] hover:bg-[#8678FB]-1000 rounded-xl transition-all duration-200 ease-in-out shadow-sm hover:shadow-md active:scale-95"
              onClick={handleOpen}>
              Change Password
            </button>
          </div>
        </div>

        {/* Achievements */}
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-semibold">Achievements</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-gradient-to-t to-purple-40 from-purple-200 p-4 rounded-xl border border-purple-100 shadow-md">
              <div className="mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium tracking-tight">
                    Achievement Unlocked
                  </span>
                  <span role="img" aria-label="party popper">
                    🎉
                  </span>
                </div>
                <p className="text-sm text-gray-500 font-light mt-5">
                  Habit Formation Complete
                </p>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-3">
                  <Droplets className="h-5 w-5 text-blue-500" />
                  <span className="font-medium text-gray-800">Drink Water</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span className="font-medium text-gray-700">x 30 Days</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-t to-purple-40 from-purple-200 p-4 rounded-xl border border-purple-100 shadow-md">
              <div className="mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium tracking-tight">
                    Achievement Unlocked
                  </span>
                  <span role="img" aria-label="party popper">
                    🎉
                  </span>
                </div>
                <p className="text-sm text-gray-500 font-light mt-5">
                  Habit Formation Complete
                </p>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-3">
                  <Dumbbell className="h-5 w-5 text-blue-500" />
                  <span className="font-medium text-gray-800">Drink Water</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span className="font-medium text-gray-700">x 30 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChangePasswordDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <DeleteAccountDialog
        isOpen_delete={isOpen_delete}
        setIsOpen_delete={setIsOpen_delete}
      />
      <AchievementDialog
        isOpen_notification={isOpen_notification}
        setIsOpen_notification={setIsOpen_notification}
      />
    </div>
  );
}
