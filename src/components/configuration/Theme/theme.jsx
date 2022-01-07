// import { createTheme } from "@material-ui/core/styles";
// import { createTheme } from "@material-ui/core";

// import { createTheme } from "@mui/material/styles";

import { createTheme } from "@mui/material/styles";

// import { createTheme } from "@mui/material";

// declare module "@material-ui/core/styles/createTheme" {
//   interface ThemeOptions {
//     themeName?: string; // optional
//   }
// }

export const theme = createTheme({
  palette: {
    primary: {
      main: "#22c870",
      textColor: "#03314B",
    },
    secondary: {
      main: "#0365F2",
      textColor: "#FFFFFF",
    },
  },
});

export default theme;
