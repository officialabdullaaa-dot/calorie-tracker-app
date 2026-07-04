import type { OnboardingQuestion } from "@/types/onboarding";

export const onboardingQuestions: OnboardingQuestion[] = [
  {
    id: "name",
    type: "text",
    question: "What should I call you?",
    helper: "This helps personalize your dashboard and coaching experience.",
    placeholder: "Maaz",
  },
  {
    id: "gender",
    type: "select",
    question: "What's your gender?",
    helper: "This helps estimate your calorie needs more accurately.",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
  },
  {
    id: "age",
    type: "number",
    question: "How old are you?",
    helper: "Age helps us estimate your daily calorie needs.",
    placeholder: "24",
  },
  {
    id: "height",
    type: "number",
    question: "What's your height?",
    helper: "Enter your height in centimeters.",
    placeholder: "175",
    unitOptions: [
  { label: "cm", value: "cm" },
  { label: "ft", value: "ft" },
],
  },
  {
    id: "weight",
    type: "number",
    question: "What's your current weight?",
    helper: "We'll use this to calculate your starting plan and progress.",
    placeholder: "80.8",
    unitOptions: [
  { label: "kg", value: "kg" },
  { label: "lb", value: "lb" },
],
  },
  {
    id: "goal",
    type: "select",
    question: "What's your main goal?",
    helper: "We'll build your calorie and macro targets around this.",
    options: [
      { label: "Lose fat", value: "lose_weight" },
      { label: "Maintain weight", value: "maintain" },
      { label: "Gain muscle", value: "gain_muscle" },
    ],
  },
  {
    id: "activityLevel",
    type: "select",
    question: "How active are you?",
    helper: "Choose the option that best matches your average week.",
    options: [
      { label: "Sedentary — little movement", value: "sedentary" },
      { label: "Light — walks or light activity", value: "light" },
      { label: "Moderate — 3–4 active days/week", value: "moderate" },
      { label: "Active — 5–6 active days/week", value: "active" },
      { label: "Athlete — intense daily training", value: "athlete" },
    ],
  },
];