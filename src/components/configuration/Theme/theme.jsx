import { createTheme } from "@mui/material/styles";
import "@fontsource/pt-sans";

export const theme = createTheme({
  palette: {
    common: {
      white: "#DFE8F6",
    },
    primary: {
      main: "#22C870",
      light: "#2CE080",
      dark: "#20BA68",
    },
    secondary: {
      main: "#0365F2",
      dark: "#0365F2",
    },
    info: {
      main: "#DFE8F6",
    },
  },

  typography: {
    allVariants: {
      color: "#03314B",
    },
    fontFamily: "PT Sans",

    h1: {
      fontFamily: "PT Sans",
      fontSize: "36px",
      lineHeight: "45px",
    },
    subtitle1: {
      fontFamily: "PT Sans",
      fontSize: "24px",
      lineHeight: "32px",
    },
    subtitle2: {
      fontSize: "18px",
      lineHeight: "24px",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontSize: "22px",
      lineHeight: "20px",
    },
    caption: {
      fontSize: "14px",
      lineHeight: "22px",
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          disableRipple: true,
          disableFocusRipple: true,
          disableElevation: true,
        },

        outlinedSecondary: {
          border: "none",
          outline: "none",
          textTransform: "none",
          color: "#0365F2",
          "&:hover": {
            backgroundColor: "#0365F2",
            color: "white",
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          width: "100%",
          // height: "86px",
          fontFamily: "PT Sans",
          fontVariant: "body2",
          backgroundColor: "#FFFFFF",
          color: "#03314B",
          boxShadow: "0 0 0",
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          fontSize: "0.9rem",
          top: "30%",
          bottom: "30%",
          left: "250px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          disableRipple: true,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          boxShadow: "0 0",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 0 0",
          backgroundColor: "#F7F7F7",
        },
      },
    },
    MuiContainer: {
      stylesOverrides: {
        root: {
          // height: "calc(100vh-84px)",
          backgroundColor: "#f7f7f7",
        },
      },
    },
  },
});
export default theme;
