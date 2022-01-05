import * as React from "react";
import { Button } from "@mui/material";
type ButtonProps = {
  variant: "outlined" | "contained";
  color: "primary" | "secondary";
  label: string;
  size: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  width?: boolean;
  handleClick: () => void;
};

export const CustomButtom = ({
  variant,
  color,
  label,
  size,
  startIcon,
  endIcon,
  width,
  handleClick,
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={handleClick}
      fullWidth={width}
    >
      {label}
    </Button>
  );
};
