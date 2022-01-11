import { createTheme } from "@mui/material/styles";
import "@fontsource/pt-sans";
import "@fontsource/raleway";
export const theme = createTheme({
  palette: {
    common: {
      white: "#DFE8F6",
    },
    primary: {
      main: "#22C870",
      // light: "#2CE080",
      // dark: "#20BA68",
    },
    secondary: {
      main: "#DFE8F6",
      dark: "#0365F2",
    },
    info: {
      main: "#DFE8F6",
    },
  },

  typography: {
    allVariants: {
      color: "#03314B",
      fontFamily: "raleway",
      fontWeight: "400",
    },

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
          fontFamily: "raleway",
          fontSize: "16px",
          disableRipple: true,
          disableFocusRipple: true,
          disableElevation: true,
          textDecoration: "none",
        },

        containedPrimary: {
          disableRipple: true,
          disableElevation: true,
          disableFocusRipple: true,
          textTransform: "none",
          border: "none",
          color: "##2CE080",
          fontFamily: "raleway",
          fontSize: "16px",
          "&:hover": {
            backgroundColor: "#00C263",
          },
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
          fontSize: "3rem",
          // top: "30%",
          // bottom: "30%",
          // left: "250px",
          height: "86px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          disableRipple: true,
          fontSize: "16px",
          fontColor: "#03314B",
          fontWeight: "500",
          lineHeight: "20.11px",
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
          fontColor: "#03314B",
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

    // MuiGrid: {
    //   container: {
    //     margin: 0,
    //     width: "100%",
    //   },
    // },
  },
});
export default theme;
