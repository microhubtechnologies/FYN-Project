import React from "react";

export const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  let variantClasses = "";

  if (variant === "default") {
    variantClasses =
      "bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 shadow-sm";
  } else if (variant === "outline") {
    variantClasses =
      "border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2";
  } else if (variant === "ghost") {
    variantClasses =
      "text-blue-600 hover:bg-blue-50 px-2 py-1";
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
