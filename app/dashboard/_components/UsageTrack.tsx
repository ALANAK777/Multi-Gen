"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect } from "react";
import { HISTORY } from "@/app/dashboard/history/page";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCreditUsage } = useContext(UpdateCreditUsageContext);

  useEffect(() => {
    if (user) {
      GetData();
    }
  }, [user, updateCreditUsage]);

  const GetData = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) return;
    const result = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));
    GetTotalUsage(result as HISTORY[]);
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    const total = result.reduce((acc, element) =>
      acc + (element.aiResponse?.length || 0), 0);
    setTotalUsage(total);
  };

  return (
    <div className="m-5">
      <div className="bg-[#FFB000] text-white p-3 rounded-lg">
        <h2 className="font-medium">Usage Tracking</h2>
        <div className="h-2 bg-[#FFD166] w-full rounded-lg mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: `${Math.min((totalUsage / 10000) * 100, 100)}%`,
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10,000 Characters used</h2>
      </div>
     
    </div>
  );
}

export default UsageTrack;
