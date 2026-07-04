export type AIFoodItem = {
  name: string;
  quantity: number;
  unit: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  confidence: number;
};

export type AIMealAnalysis = {
  foods: AIFoodItem[];
  totals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  coach: {
    summary: string;
    suggestion: string;
  };
  confidence: number;
  warnings: string[];
  estimatedServing: boolean;
};

export type AIProvider = {
  analyzeMeal(input: {
    rawInput: string;
    mealType: string;
  }): Promise<AIMealAnalysis>;
};
