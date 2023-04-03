import classNames, { ArgumentArray } from "classnames";
import { twMerge } from "tailwind-merge";

/** Handle merge tailwind classes without conflict */
const cnMerge = (...classes: ArgumentArray) => twMerge(classNames(...classes));

export default cnMerge;
