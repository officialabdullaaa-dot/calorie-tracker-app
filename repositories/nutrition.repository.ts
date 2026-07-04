import { loadFromStorage, saveToStorage } from "@/services/storage.service";
import { mockDailyLog, mockUserProfile } from "@/constants/mock-data";
import type { DailyLog, UserProfile } from "@/types/nutrition";

export const NutritionRepository = {
  loadProfile(): UserProfile {
    return loadFromStorage("profile", mockUserProfile);
  },

  saveProfile(profile: UserProfile) {
    saveToStorage("profile", profile);
  },

  loadDailyLog(): DailyLog {
    return loadFromStorage("dailyLog", mockDailyLog);
  },

  saveDailyLog(log: DailyLog) {
    saveToStorage("dailyLog", log);
  },
};
