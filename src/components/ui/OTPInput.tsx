import * as React from "react";

const OTPInput: React.FC<{ length: number }> = ({ length = 6 }) => {
  const [otp, setOtp] = React.useState<string[]>(Array(length).fill(""));

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Allow only numeric input

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus the next input
    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    const newOtp = [...otp];

    pasteData.split("").forEach((char, index) => {
      if (/^\d*$/.test(char)) {
        newOtp[index] = char;
      }
    });

    setOtp(newOtp);
  };

  return (
    <div className="flex gap-x-6">
      {otp.map((value, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          onPaste={handlePaste}
          className="w-10 h-10 text-center text-lg border border-border rounded-md focus:border-blue-600 focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-4"
          autoFocus={index === 0}
        />
      ))}
    </div>
  );
};

export { OTPInput };
