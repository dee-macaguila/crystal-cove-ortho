import React from "react";

const sizeClasses = {
  default: "h-10 px-4 py-2 text-sm",
  lg: "h-11 px-6 text-base",
  sm: "h-9 px-3 text-sm",
};

const variantClasses = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  ghost: "bg-transparent hover:bg-blue-50 text-blue-700",
};

export function Button({
  children,
  className = "",
  size = "default",
  variant = "default",
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const classes = [base, sizeClasses[size] || sizeClasses.default, variantClasses[variant] || variantClasses.default, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
