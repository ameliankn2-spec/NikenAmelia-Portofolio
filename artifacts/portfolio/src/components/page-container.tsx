import { ReactNode } from "react";

export function PageContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-7xl mx-auto px-6 sm:px-12 pb-32 ${className}`}>
      {children}
    </div>
  );
}
