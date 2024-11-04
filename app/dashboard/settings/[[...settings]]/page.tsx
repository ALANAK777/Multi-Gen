// app/dashboard/settings/[[...settings]]/page.tsx
import { UserProfile } from "@clerk/nextjs";
import React from "react";

function Settings() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="w-full max-w-[95%] md:max-w-3xl mx-auto">
        <UserProfile 
          path="/dashboard/settings"
          routing="path"
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "rounded-lg shadow-md p-4 md:p-6",
              navbar: "mb-4 md:mb-6",
              scrollContainer: "px-2 md:px-4",
              pageScrollContent: "py-4 md:py-6"
            }
          }}
        />
      </div>
    </div>
  );
}

export default Settings;