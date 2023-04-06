import cnMerge from "utils/cnMerge";

import { VariantType } from "./types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: VariantType;
  children: React.ReactNode;
}

const Button = ({
  className,
  variant = "contained",
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={cnMerge(
        /** base style */
        "relative h-10 w-fit overflow-hidden whitespace-nowrap rounded-md",
        "border border-primary-main px-6 font-semibold transition-all",
        /** variants */
        {
          ["text-primary-main before:-translate-x-full after:translate-x-full hover:text-white hover:before:-translate-x-[30%] hover:after:translate-x-[30%]"]:
            variant === "outlined",
          ["text-white hover:text-primary-main hover:before:-translate-x-full hover:after:translate-x-full"]:
            variant === "contained",
        },
        /** after */
        "after:absolute after:inset-x-0 after:inset-y-0 after:-z-[1]",
        "after:border-y-[20px] after:border-l-[20px] after:border-primary-main after:border-l-transparent",
        "after:transition-all after:duration-300 after:content-['']",
        /** before */
        "before:absolute before:inset-x-0 before:inset-y-0 before:-z-[1]",
        "before:border-y-[20px] before:border-r-[20px] before:border-primary-main before:border-r-transparent",
        "before:transition-all before:duration-300 before:content-['']",
        /** active */
        "active:scale-95 active:brightness-75",
        /** custom styles */
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
