"use server";

import { revalidatePath } from "next/cache";

const DEMO_USER_ID = "demo-user-1"; // Demo user for development

export const upsertChallengeProgress = async (challengeId: number) => {
  const userId = DEMO_USER_ID; // Use demo user

  if (!userId) throw new Error("Unauthorized.");

  // Mock - no actual database updates
  // In a real app, this would:
  // 1. Find the challenge
  // 2. Check if user already completed it (isPractice)
  // 3. Update challengeProgress
  // 4. Update userProgress (credits and points)
  
  revalidatePath("/learn");
  revalidatePath("/lesson");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
  
  return { mocked: true };
};
