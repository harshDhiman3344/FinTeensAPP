"use server";

import { revalidatePath } from "next/cache";
import { addDailyXP } from "@/db/daily-xp";

const DEMO_USER_ID = "demo-user-1"; // Demo user for development

const XP_PER_CHALLENGE = 10;

export const upsertChallengeProgress = async (challengeId: number) => {
  const userId = DEMO_USER_ID; // Use demo user

  if (!userId) throw new Error("Unauthorized.");

  // Award XP for completing the challenge
  await addDailyXP(XP_PER_CHALLENGE);

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
