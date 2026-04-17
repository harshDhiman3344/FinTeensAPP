"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { MAX_HEARTS, POINTS_TO_REFILL } from "@/constants";
import {
  getCourseById,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";

const ACTIVE_COURSE_COOKIE = "finteens_active_course_id";

const DEMO_USER_ID = "demo-user-1"; // Demo user for development

export const upsertUserProgress = async (courseId: number) => {
  const userId = DEMO_USER_ID;

  const course = await getCourseById(courseId);

  if (!course) throw new Error("Course not found.");

  const cookieStore = await cookies();
  cookieStore.set(ACTIVE_COURSE_COOKIE, String(courseId), {
    path: "/",
    sameSite: "lax",
  });

  // Mock - skip database operations for demo
  revalidatePath("/courses");
  revalidatePath("/learn");

  redirect("/learn");
};

export const reduceCredits = async (challengeId: number) => {
  const userId = DEMO_USER_ID;
  if (!userId) throw new Error("Unauthorized.");

  const currentUserProgress = await getUserProgress();
  const userSubscription = await getUserSubscription();

  // Mock - no actual database updates
  return { mocked: true };
};

export const refillCredits = async () => {
  const currentUserProgress = await getUserProgress();

  if (!currentUserProgress) throw new Error("User progress not found.");

  // Mock - no actual database updates
  return { mocked: true };
};
