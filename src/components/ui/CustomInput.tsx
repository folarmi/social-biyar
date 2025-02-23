import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { clsx } from "clsx"; // optional for handling conditional classes
// import { TextField } from "@radix-ui/themes";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  className?: string;
  icon?: React.ReactNode;
  ifGrayBg?: boolean;
}

const CustomInput: React.FC<InputProps> = ({
  label,
  error,
  className,
  icon,
  ifGrayBg,
  ...props
}) => {
  return (
    <div className={`flex flex-col  w-full ${className}`}>
      {/* Label Component */}
      <LabelPrimitive.Root className="text-sm font-medium text-foreground pb-2">
        {label}
      </LabelPrimitive.Root>

      <div className="relative flex items-center">
        <input
          className={clsx(
            `w-full px-3 py-2.5 text-sm outline-none border border-gray-200 rounded-md ${
              ifGrayBg ? "bg-alpha_3" : "bg-white/90"
            } transition-all placeholder:text-gray-400 placeholder:text-sm placeholder:font-normal`,
            error ? "border-red-500 focus:ring-red-500" : "border-gray-300"
          )}
          {...props}
        />

        {icon && (
          <div className="absolute pointer-events-none right-0 pr-3">
            {icon}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export { CustomInput };
