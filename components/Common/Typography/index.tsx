import { createElement } from "react";

import { BoldType, TypographyType, TypographyVariantType } from "./types";
import cnMerge from "utils/cnMerge";

interface TypographyProps
  extends React.HTMLAttributes<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  > {
  type?: TypographyType;
  variant?: TypographyVariantType;
  className?: string;
  bold?: BoldType;
  children: React.ReactNode;
}

const CLASS_STYLES = {
  heading1: "text-5xl font-semibold",
  heading2: "text-2xl font-semibold",
  paragraph1: "text-lg",
  paragraph2: "text-base",
  paragraph3: "text-sm",
  caption: "text-xs",
} as const;

const BOLD_STYLES = {
  semi: "font-semibold",
  medium: "font-bold",
  extra: "font-extrabold",
} as const;

const Typography = ({
  type = "p",
  variant = "paragraph1",
  className,
  children,
  bold,
  ...restProps
}: TypographyProps) => {
  const element = createElement(
    type,
    {
      className: cnMerge(
        CLASS_STYLES[variant],
        bold && BOLD_STYLES[bold],
        className
      ),
      ...restProps,
    },
    children
  );

  return <>{element}</>;
};

export default Typography;
