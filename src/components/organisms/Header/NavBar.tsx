// import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Box,
  Container,
  Menu,
  Tab,
  Tabs,
  Toolbar,
  Button,
} from "@mui/material";
import { IconButton } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import logo from "../../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { ExploreMenu } from "../../Molecules/Menu/ExploreMenu";
import "@fontsource/raleway";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    width: "100%",
    // height: "86px",
  },

  logo: {
    height: "35px",
    width: "132.09px",
    color: "black",
    cursor: "pointer",
  },

  tabContainer: {
    color: "black",
    "& .MuiTabs-indicator": {
      display: "none",
    },
  },

  body: {
    bottom: "50",
  },
});

type NavBarProps = {
  handleGetByCategory: (category: string) => void;
};

export const NavBar = ({ handleGetByCategory }: NavBarProps) => {
  const classes = useStyles();

  const [icon, setIcon] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClose = () => {
    setIcon(true);
    setAnchorEl(null);
  };

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIcon(false);
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box maxWidth={1050}>
      <AppBar position='static' elevation={0}>
        <Toolbar>
          <Link to='/library'>
            <Box
              component='img'
              src={logo}
              className={classes.logo}
              onClick={() => console.log("image tapped")}
            />
          </Link>

          <Box sx={{ marginLeft: "25px", fontSize: "30px" }}>
            <IconButton sx={{ fontSize: "30px" }}>
              <SearchIcon />
            </IconButton>
          </Box>

          <Box sx={{ marginLeft: "25px" }}>
            <Button
              children='Explore'
              onClick={openMenu}
              endIcon={icon === true ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            />
          </Box>

          <Box sx={{ marginLeft: "25px", flexGrow: 1 }}>
            <Button
              children='My library'
              size='large'
              to='/library'
              component={Link}
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button children='Account' endIcon={<ExpandMoreIcon />} />
          </Box>
        </Toolbar>
        <Menu
          marginThreshold={0}
          style={{ top: "1px", height: "auto" }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onMouseLeave={handleClose}
          PaperProps={{
            style: {
              width: "100%",
              maxWidth: "100%",
              left: 0,
              right: 0,
              backgroundColor: "#F1F6F4",
              boxShadow: "0 0 0",
            },
          }}
        >
          <ExploreMenu
            handleMouseOut={handleClose}
            handleGetByCategory={handleGetByCategory}
          />
        </Menu>
      </AppBar>
    </Box>
  );
};

export default NavBar;
