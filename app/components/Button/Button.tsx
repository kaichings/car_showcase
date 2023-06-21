"use client";
import { ButtonHTMLAttributes } from "react";
import cx from "classnames";
import Image from "next/image";

import styles from "./Button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "text-primary";
  round?: Boolean;
};

const Button = ({
  className,
  variant,
  type,
  round,
  children,
  ...restProps
}: Props) => {
  const classes = cx(
    styles.Button,
    {
      [styles["Button--Primary"]]: variant === "primary",
      [styles["Button--TextPrimary"]]: variant === "text-primary",
      [styles["Button--Round"]]: round,
    },
    className
  );
  return (
    <button className={classes} type={type || "button"} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
