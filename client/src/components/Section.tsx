import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "muted" | "primary";
}

export function Section({ children, className, id, background = "white" }: SectionProps) {
  const bgStyles = {
    white: "bg-background",
    muted: "bg-muted/30",
    primary: "bg-primary text-primary-foreground",
  };

  return (
    <section 
      id={id}
      className={cn(
        "py-16 md:py-24 relative overflow-hidden", 
        bgStyles[background],
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
}
