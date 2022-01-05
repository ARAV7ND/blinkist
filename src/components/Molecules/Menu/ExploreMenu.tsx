import { makeStyles } from "@mui/styles";
import * as React from "react";

const useStyles = makeStyles({
  root: {
    padding: 0,
    margin: 0,
    width: "100%",
    height: "350px",
    backgroundColor: "red",
  },
});

export const ExpandItems = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
      minus, maxime officia at magni iure delectus quibusdam mollitia laborum
      voluptatibus quisquam totam excepturi tempora doloremque corporis soluta.
      Deleniti, ad adipisci.
    </div>
  );
};

export default ExpandItems;
