export type QuestionType = "text" | "number" | "select";

export type SelectOption = {
  label: string;
  value: string;
};

export type OnboardingQuestion = {
  id: string;
  type: QuestionType;
  question: string;
  helper?: string;
  placeholder?: string;
  options?: SelectOption[];
  unitOptions?: SelectOption[];
  defaultUnit?: string;
};