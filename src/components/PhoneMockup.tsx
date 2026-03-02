import { ReactNode } from "react";

interface PhoneMockupProps {
  children?: ReactNode;
  label?: string;
}

const PhoneMockup = ({ children, label }: PhoneMockupProps) => (
  <div className="flex flex-col items-center gap-3">
    <div className="relative w-[200px] h-[400px] bg-muted rounded-[2rem] border-[6px] border-foreground/20 shadow-xl overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/20 rounded-b-xl z-10" />
      {/* Screen */}
      <div className="w-full h-full bg-background flex items-center justify-center p-4 pt-8">
        {children || (
          <div className="text-center">
            <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-3" />
            <p className="text-xs text-muted-foreground">Screenshot placeholder</p>
          </div>
        )}
      </div>
    </div>
    {label && <p className="text-xs text-muted-foreground font-medium">{label}</p>}
  </div>
);

export default PhoneMockup;
