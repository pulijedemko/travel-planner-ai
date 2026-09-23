import { buttonVariants } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        px-4
        py-2
        rounded-xl
        font-medium
        transition
        ${buttonVariants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
