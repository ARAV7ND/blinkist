import { makeStyles } from "@material-ui/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import logo from "../../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NavButton from "../../Atoms/Button/NavButton/NavButton";
// import theme from "../../../Theme/theme";
import { useState } from "react";
import ExpandItems from "../../Molecules/Menu/ExploreMenu";

import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FFF",
  },
  logo: {
    height: 29,
    width: 100,
    cursor: "pointer",
  },
  content: {
    justifyContent: "center",
  },
  tabContainer: {
    color: "black",
    "& .MuiTabs-indicator": {
      display: "none",
      //backgroundColor: "orange"
    },
  },
  tab: {
    textTransform: "none",
    fontSize: "0.78rem",
    fontWeight: 700,
    borderBottom: "2px solid transparent",
    "&:hover": {
      textDecoration: "none",
      borderBottom: "2px solid #22C870",
    },
  },
  body: {
    bottom: "50",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (e: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <AppBar className={classes.root} style={{ background: "#FFF" }}>
        <Toolbar className={classes.content}>
          <img alt='company logo' src={logo} className={classes.logo} />
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabContainer}
          >
            <Tab disableRipple icon={<SearchIcon />} />
            <Tab
              className={classes.tab}
              disableRipple
              label='Explore'
              // onClick={openMenu}
              to='/explore'
              component={Link}
            />
            <Tab
              className={classes.tab}
              disableRipple
              label='My Library'
              to='/library'
              component={Link}
            />
          </Tabs>
        </Toolbar>
      </AppBar>

      <div className={classes.body}>
        <Menu
          id='menu-body'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>
            <ExpandItems />
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default NavBar;
