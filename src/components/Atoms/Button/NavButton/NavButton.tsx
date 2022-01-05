import * as React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

type NavButtonProps = {
  label: string;
  handleClick: () => void;
};

const useStyles = makeStyles({
  root: {
    color: "black",
    backgroundColor: "#fff",
    padding: "0.8em",
    "&:hover": {
      border: "none",
      borderBottom: "2px solid #22C870",
      bacground: "none",
      cursor: "pointer",
    },
  },
});

export const NavButton = ({ label, handleClick }: NavButtonProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={handleClick}>
      {label}
    </div>
  );
};

export default NavButton;
