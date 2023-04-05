import { createElement } from "react";

import cnMerge from "utils/cnMerge";

import { BoldType, TypographyType } from "./types";

const CLASS_STYLES = {
  heading1: "text-6xl font-semibold",
  heading2: "text-5xl font-semibold",
  heading3: "text-4xl font-semibold",
  heading4: "text-3xl font-semibold",
  heading5: "text-2xl font-semibold",
  heading6: "text-xl font-semibold",
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

interface TypographyProps
  extends React.HTMLAttributes<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  > {
  type?: TypographyType;
  variant?: keyof typeof CLASS_STYLES;
  className?: string;
  bold?: BoldType;
  children: React.ReactNode;
}

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
