// app/dashboard/history/page.tsx (Server Component)

import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import HistoryClient from "./HistoryClient";

export interface HISTORY {
  id: Number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

export default async function History() {
  const user = await currentUser();

  if (!user) {
    // Handle the case where the user is not authenticated
    return <div>Please log in to view your history.</div>;
  }

  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIOutput.id));

  return <HistoryClient historyList={HistoryList} />;
}
