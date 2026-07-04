import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-app p-5 shadow-soft ${className || "bg-brand-surface"}`}>
      {children}
    </div>
  );
}