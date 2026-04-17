import { cache } from "react";

import { unstable_noStore as noStore } from "next/cache";
import { cookies } from "next/headers";
import { getDailyXP } from "@/db/daily-xp";

const DAY_IN_MS = 86_400_000;
const DEMO_USER_ID = "demo-user-1";

const ACTIVE_COURSE_COOKIE = "finteens_active_course_id";

const getActiveCourseId = async () => {
  const cookieStore = await cookies();
  const raw = cookieStore.get(ACTIVE_COURSE_COOKIE)?.value;
  const parsed = Number.parseInt(raw ?? "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
};

// Mock data for development - FINTEENS (Financial Literacy)
const MOCK_COURSES = [
  {
    id: 1,
    title: "Banking Basics",
    imageSrc: "/bakingBasics.png",
  },
  {
    id: 2,
    title: "Budgeting 101",
    imageSrc: "/Budgeting.png",
  },
  {
    id: 3,
    title: "Investing Fundamentals",
    imageSrc: "/investing.png",
  },
  {
    id: 4,
    title: "Credit & Debt",
    imageSrc: "/CredDebit.png",
  },
];

const MOCK_USER_PROGRESS = {
  userId: DEMO_USER_ID,
  userName: "Demo Teen",
  userImageSrc: "/newLogo.png",
  activeCourseId: 1,
  credits: 100,
  points: 0,
  activeCourse: MOCK_COURSES[0],
};

const MOCK_UNITS = [
  {
    id: 1,
    courseId: 1,
    title: "Getting Started",
    description: "Learn the fundamentals of banking",
    order: 0,
    lessons: [
      { id: 1, unitId: 1, title: "What is a Bank?", order: 0 },
      { id: 2, unitId: 1, title: "Types of Bank Accounts", order: 1 },
      { id: 3, unitId: 1, title: "How to Open an Account", order: 2 },
    ],
  },
  {
    id: 2,
    courseId: 1,
    title: "Advanced Banking",
    description: "Master banking services and tools",
    order: 1,
    lessons: [
      { id: 4, unitId: 2, title: "Interest Rates Explained", order: 0 },
      { id: 5, unitId: 2, title: "Online Banking Safety", order: 1 },
    ],
  },
  // Budgeting 101 units
  {
    id: 3,
    courseId: 2,
    title: "Budget Basics",
    description: "Learn how to create a budget",
    order: 0,
    lessons: [
      { id: 6, unitId: 3, title: "What is a Budget?", order: 0 },
      { id: 7, unitId: 3, title: "Income vs Expenses", order: 1 },
    ],
  },
  {
    id: 4,
    courseId: 2,
    title: "Budget Planning",
    description: "Plan your finances effectively",
    order: 1,
    lessons: [
      { id: 8, unitId: 4, title: "The 50/30/20 Rule", order: 0 },
      { id: 9, unitId: 4, title: "Tracking Expenses", order: 1 },
    ],
  },
  // Investing Fundamentals units
  {
    id: 5,
    courseId: 3,
    title: "Investment Basics",
    description: "Understand the basics of investing",
    order: 0,
    lessons: [
      { id: 10, unitId: 5, title: "What is Investing?", order: 0 },
      { id: 11, unitId: 5, title: "Stocks vs Bonds", order: 1 },
    ],
  },
  {
    id: 6,
    courseId: 3,
    title: "Building a Portfolio",
    description: "Create your investment portfolio",
    order: 1,
    lessons: [
      { id: 12, unitId: 6, title: "Asset Allocation", order: 0 },
      { id: 13, unitId: 6, title: "Diversification", order: 1 },
    ],
  },
  // Credit & Debt units
  {
    id: 7,
    courseId: 4,
    title: "Understanding Credit",
    description: "Learn about credit scores and reports",
    order: 0,
    lessons: [
      { id: 14, unitId: 7, title: "What is a Credit Score?", order: 0 },
      { id: 15, unitId: 7, title: "Building Good Credit", order: 1 },
    ],
  },
  {
    id: 8,
    courseId: 4,
    title: "Managing Debt",
    description: "Strategies for managing debt effectively",
    order: 1,
    lessons: [
      { id: 16, unitId: 8, title: "Types of Debt", order: 0 },
      { id: 17, unitId: 8, title: "Debt Repayment Strategies", order: 1 },
    ],
  },
];

const ALL_LESSONS = MOCK_UNITS.flatMap((unit) => unit.lessons);

const MOCK_CHALLENGES = [
  // Banking Basics (Lesson 1)
  {
    id: 1,
    lessonId: 1,
    type: "SELECT",
    question: "What is the primary purpose of a bank?",
    order: 0,
    challengeOptions: [
      { id: 1, challengeId: 1, text: "To hold money safely", correct: true, imageSrc: null, audioSrc: null },
      { id: 2, challengeId: 1, text: "To sell groceries", correct: false, imageSrc: null, audioSrc: null },
      { id: 3, challengeId: 1, text: "To rent movies", correct: false, imageSrc: null, audioSrc: null },
    ],
    challengeProgress: [],
  },
  {
    id: 2,
    lessonId: 1,
    type: "SELECT",
    question: "Which account type earns interest?",
    order: 1,
    challengeOptions: [
      { id: 4, challengeId: 2, text: "Savings Account", correct: true, imageSrc: null, audioSrc: null },
      { id: 5, challengeId: 2, text: "Checking Account", correct: false, imageSrc: null, audioSrc: null },
      { id: 6, challengeId: 2, text: "Neither", correct: false, imageSrc: null, audioSrc: null },
    ],
    challengeProgress: [],
  },
  // Budgeting 101 (Lesson 6)
  {
    id: 3,
    lessonId: 6,
    type: "SELECT",
    question: "What is a budget?",
    order: 0,
    challengeOptions: [
      { id: 7, challengeId: 3, text: "A plan for your money", correct: true, imageSrc: null, audioSrc: null },
      { id: 8, challengeId: 3, text: "A type of investment", correct: false, imageSrc: null, audioSrc: null },
      { id: 9, challengeId: 3, text: "A loan document", correct: false, imageSrc: null, audioSrc: null },
    ],
    challengeProgress: [],
  },
  {
    id: 4,
    lessonId: 6,
    type: "SELECT",
    question: "Which comes first in budgeting?",
    order: 1,
    challengeOptions: [
      { id: 10, challengeId: 4, text: "Track income and expenses", correct: true, imageSrc: null, audioSrc: null },
      { id: 11, challengeId: 4, text: "Invest money", correct: false, imageSrc: null, audioSrc: null },
      { id: 12, challengeId: 4, text: "Save for vacation", correct: false, imageSrc: null, audioSrc: null },
    ],
    challengeProgress: [],
  },
  // Investing Fundamentals (Lesson 10)
  {
    id: 5,
    lessonId: 10,
    type: "SELECT",
    question: "What does investing mean?",
    order: 0,
    challengeOptions: [
      { id: 13, challengeId: 5, text: "Putting money into assets to grow wealth", correct: true, imageSrc: null, audioSrc: null },
      { id: 14, challengeId: 5, text: "Spending money on things", correct: false, imageSrc: null, audioSrc: null },
      { id: 15, challengeId: 5, text: "Borrowing money", correct: false, imageSrc: null, audioSrc: null },
    ],
    challengeProgress: [],
  },
  {
    id: 6,
    lessonId: 10,
    type: "SELECT",
    question: "What is a stock?",
    order: 1,
    challengeOptions: [
      { id: 16, challengeId: 6, text: "A share of ownership in a company", correct: true, imageSrc: null, audioSrc: null },
      { id: 17, challengeId: 6, text: "Money kept in savings", correct: false, imageSrc: null, audioSrc: null },
      { id: 18, challengeId: 6, text: "A type of insurance", correct: false, imageSrc: null, audioSrc: null },
    ],
    challengeProgress: [],
  },
  // Credit & Debt (Lesson 14)
  {
    id: 7,
    lessonId: 14,
    type: "SELECT",
    question: "What is a credit score?",
    order: 0,
    challengeOptions: [
      { id: 19, challengeId: 7, text: "A number representing your creditworthiness", correct: true, imageSrc: null, audioSrc: null },
      { id: 20, challengeId: 7, text: "Money you owe", correct: false, imageSrc: null, audioSrc: null },
      { id: 21, challengeId: 7, text: "A type of card", correct: false, imageSrc: null, audioSrc: null },
    ],
    challengeProgress: [],
  },
  {
    id: 8,
    lessonId: 14,
    type: "SELECT",
    question: "Good credit scores help you get:",
    order: 1,
    challengeOptions: [
      { id: 22, challengeId: 8, text: "Better loan rates", correct: true, imageSrc: null, audioSrc: null },
      { id: 23, challengeId: 8, text: "Free money", correct: false, imageSrc: null, audioSrc: null },
      { id: 24, challengeId: 8, text: "Permanent debt forgiveness", correct: false, imageSrc: null, audioSrc: null },
    ],
    challengeProgress: [],
  },
];

export const getCourses = cache(async () => {
  return MOCK_COURSES;
});

export const getUserProgress = async () => {
  noStore();
  const activeCourseId = await getActiveCourseId();
  const activeCourse = MOCK_COURSES.find((c) => c.id === activeCourseId);
  const dailyXP = await getDailyXP();
  
  return {
    ...MOCK_USER_PROGRESS,
    activeCourseId: activeCourseId,
    activeCourse: activeCourse || MOCK_COURSES[0],
    points: dailyXP,
  };
};

export const getUnits = async () => {
  noStore();
  const activeCourseId = await getActiveCourseId();
  return MOCK_UNITS.filter((unit) => unit.courseId === activeCourseId);
};

export const getCourseById = cache(async (id: number) => {
  const course = MOCK_COURSES.find((c) => c.id === id);
  if (!course) return null;
  
  return {
    ...course,
    units: MOCK_UNITS.filter((unit) => unit.courseId === id),
  };
});

export const getCourseProgress = async () => {
  noStore();
  const activeCourseId = await getActiveCourseId();
  const activeUnits = MOCK_UNITS.filter(
    (unit) => unit.courseId === activeCourseId
  );
  const firstUnit = activeUnits[0];
  const firstLesson = firstUnit?.lessons[0];
  const fallbackLesson = ALL_LESSONS[0];
  const activeLesson = firstLesson || fallbackLesson;

  return {
    activeLesson,
    activeLessonId: activeLesson?.id || 1,
  };
};

export const getLesson = async (id?: number) => {
  noStore();
  const courseProgress = await getCourseProgress();
  const resolvedLessonId = id ?? courseProgress.activeLessonId;

  const lesson = ALL_LESSONS.find((l) => l.id === resolvedLessonId);
  if (!lesson) return null;

  const lessonChallenges = MOCK_CHALLENGES.filter((c) => c.lessonId === lesson.id);

  return {
    ...lesson,
    challenges: lessonChallenges.map((c) => ({
      ...c,
      completed: false,
    })),
  };
};

export const getLessonPercentage = cache(async () => {
  return 0;
});

export const getUserSubscription = cache(async () => {
  return null;
});

export const getTopTenUsers = cache(async () => {
  return [
    {
      userId: DEMO_USER_ID,
      userName: "Demo User",
      userImageSrc: "/newLogo.png",
      points: 100,
    },
  ];
});
