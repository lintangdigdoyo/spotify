import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button = ({ className, children, ...restProps }: ButtonProps) => {
  return (
    <button
      className={classNames(
        "relative h-10 w-fit overflow-hidden whitespace-nowrap rounded-md border border-primary px-6 font-semibold text-primary transition-all active:scale-95 active:brightness-75",
        // after: transition
        "after:absolute after:inset-x-0 after:inset-y-0 after:-z-[1] after:translate-x-full after:border-y-[20px] after:border-l-[20px] after:border-primary after:border-l-transparent after:transition-all after:duration-300 after:content-['']",
        // before: transition
        "before:absolute before:inset-x-0 before:inset-y-0 before:-z-[1] before:-translate-x-full before:border-y-[20px] before:border-r-[20px] before:border-primary before:border-r-transparent before:transition-all before:duration-300 before:content-['']",
        // hover: transition
        "hover:text-white hover:before:-translate-x-[30%] hover:after:translate-x-[30%]",
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
