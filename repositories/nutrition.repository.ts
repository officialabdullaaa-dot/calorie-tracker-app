import type { DailyLog, UserProfile } from "@/types/nutrition";

const PROFILE_KEY = "meal-tracking-profile";
const DAILY_LOG_KEY = "meal-tracking-daily-log";

export class NutritionRepository {
  static getProfile(): UserProfile | null {
    if (typeof window === "undefined") return null;

    const data = localStorage.getItem(PROFILE_KEY);

    if (!data) return null;

    try {
      return JSON.parse(data) as UserProfile;
    } catch {
      return null;
    }
  }

  static saveProfile(profile: UserProfile): void {
    if (typeof window === "undefined") return;

    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  }

  static getDailyLog(): DailyLog | null {
    if (typeof window === "undefined") return null;

    const data = localStorage.getItem(DAILY_LOG_KEY);

    if (!data) return null;

    try {
      return JSON.parse(data) as DailyLog;
    } catch {
      return null;
    }
  }

  static saveDailyLog(dailyLog: DailyLog): void {
    if (typeof window === "undefined") return;

    localStorage.setItem(DAILY_LOG_KEY, JSON.stringify(dailyLog));
  }

  static clearDailyLog(): void {
    if (typeof window === "undefined") return;

    localStorage.removeItem(DAILY_LOG_KEY);
  }
}