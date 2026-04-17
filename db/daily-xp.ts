import { cookies } from "next/headers";

const DAILY_XP_COOKIE = "finteens_daily_xp";
const DAILY_XP_LAST_RESET_COOKIE = "finteens_daily_xp_last_reset";

const getTodayIsoDate = () => new Date().toISOString().split("T")[0];

const parseIntOrZero = (raw: string | undefined) => {
  const parsed = Number.parseInt(raw ?? "", 10);
  return Number.isFinite(parsed) ? parsed : 0;
};

const cookieOptions = {
  path: "/",
  sameSite: "lax" as const,
  maxAge: 60 * 60 * 24 * 365,
};

export const getDailyXP = async () => {
  const cookieStore = await cookies();

  const today = getTodayIsoDate();
  const lastReset = cookieStore.get(DAILY_XP_LAST_RESET_COOKIE)?.value;

  // IMPORTANT: We can't modify cookies during Server Component render.
  // If it's a new day, just treat XP as 0. The next server action will
  // persist the reset when awarding XP.
  if (lastReset !== today) return 0;

  return parseIntOrZero(cookieStore.get(DAILY_XP_COOKIE)?.value);
};

export const addDailyXP = async (amount: number) => {
  const cookieStore = await cookies();

  const today = getTodayIsoDate();
  const lastReset = cookieStore.get(DAILY_XP_LAST_RESET_COOKIE)?.value;

  const current =
    lastReset === today
      ? parseIntOrZero(cookieStore.get(DAILY_XP_COOKIE)?.value)
      : 0;

  const next = Math.max(0, current + amount);

  // Cookie writes are allowed here because this function is called from a server action.
  cookieStore.set(DAILY_XP_COOKIE, String(next), cookieOptions);
  cookieStore.set(DAILY_XP_LAST_RESET_COOKIE, today, cookieOptions);
  return next;
};

export const getDailyXPState = async () => {
  const cookieStore = await cookies();

  const today = getTodayIsoDate();
  const lastReset = cookieStore.get(DAILY_XP_LAST_RESET_COOKIE)?.value;
  const dailyXP =
    lastReset === today
      ? parseIntOrZero(cookieStore.get(DAILY_XP_COOKIE)?.value)
      : 0;

  return {
    dailyXP,
    lastResetDate: lastReset ?? today,
  };
};

export const getDaysStreak = () => {
  // For now, return a static streak. Can be enhanced later.
  return 7;
};
