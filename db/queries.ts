import { cache } from "react";

const DAY_IN_MS = 86_400_000;
const DEMO_USER_ID = "demo-user-1";

// Mock data for development - FINTEENS (Financial Literacy)
const MOCK_COURSES = [
  {
    id: 1,
    title: "Banking Basics",
    imageSrc: "/es.svg",
  },
  {
    id: 2,
    title: "Budgeting 101",
    imageSrc: "/fr.svg",
  },
  {
    id: 3,
    title: "Investing Fundamentals",
    imageSrc: "/it.svg",
  },
  {
    id: 4,
    title: "Credit & Debt",
    imageSrc: "/hr.svg",
  },
];

const MOCK_USER_PROGRESS = {
  userId: DEMO_USER_ID,
  userName: "Demo Teen",
  userImageSrc: "/mascot.svg",
  activeCourseId: 1,
  credits: 100,
  points: 0,
  activeCourse: MOCK_COURSES[0],
};

const MOCK_LESSONS = [
  { id: 1, unitId: 1, title: "What is a Bank?", order: 0 },
  { id: 2, unitId: 1, title: "Types of Bank Accounts", order: 1 },
  { id: 3, unitId: 1, title: "How to Open an Account", order: 2 },
  { id: 4, unitId: 2, title: "Creating Your Budget", order: 0 },
];

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
];

const MOCK_CHALLENGES = [
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
];

export const getCourses = cache(async () => {
  return MOCK_COURSES;
});

export const getUserProgress = cache(async () => {
  return MOCK_USER_PROGRESS;
});

export const getUnits = cache(async () => {
  return MOCK_UNITS;
});

export const getCourseById = cache(async (id: number) => {
  const course = MOCK_COURSES.find((c) => c.id === id);
  if (!course) return null;
  
  return {
    ...course,
    units: MOCK_UNITS,
  };
});

export const getCourseProgress = cache(async () => {
  return {
    activeLesson: MOCK_LESSONS[0],
    activeLessonId: 1,
  };
});

export const getLesson = cache(async (id?: number) => {
  const lesson = MOCK_LESSONS.find((l) => l.id === (id || 1));
  if (!lesson) return null;

  return {
    ...lesson,
    challenges: MOCK_CHALLENGES.map((c) => ({
      ...c,
      completed: false,
    })),
  };
});

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
      userImageSrc: "/mascot.svg",
      points: 100,
    },
  ];
});
