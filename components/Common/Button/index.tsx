import cnMerge from "utils/cnMerge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button = ({ className, children, ...restProps }: ButtonProps) => {
  return (
    <button
      className={cnMerge(
        /** base style */
        "relative h-10 w-fit overflow-hidden whitespace-nowrap rounded-md",
        "border border-primary-main px-6 font-semibold text-primary-main transition-all",
        /** after */
        "after:absolute after:inset-x-0 after:inset-y-0 after:-z-[1]",
        "after:translate-x-full",
        "after:border-y-[20px] after:border-l-[20px] after:border-primary-main after:border-l-transparent",
        "after:transition-all after:duration-300 after:content-['']",
        /** before */
        "before:absolute before:inset-x-0 before:inset-y-0 before:-z-[1]",
        "before:-translate-x-full",
        "before:border-y-[20px] before:border-r-[20px] before:border-primary-main before:border-r-transparent",
        "before:transition-all before:duration-300 before:content-['']",
        /** hover */
        "hover:text-white hover:before:-translate-x-[30%] hover:after:translate-x-[30%]",
        /** active */
        "active:scale-95 active:brightness-75",
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
