import { UserProfile } from "@clerk/nextjs";
import React from "react";

function Settings() {
  return (
    <div className="flex items-center justify-center h-full">
      <UserProfile 
        path="/dashboard/settings"
        routing="path"
        appearance={{
          elements: {
            rootBox: "w-full max-w-3xl mx-auto",
            card: "rounded-lg shadow-md"
          }
        }}
      />
    </div>
  );
}

export default Settings;