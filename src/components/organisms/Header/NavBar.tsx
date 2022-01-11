// import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Box,
  Container,
  Menu,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import logo from "../../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { ExploreMenu } from "../../Molecules/Menu/ExploreMenu";

import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    width: "100%",
    // height: "86px",
  },
  // content: {
  //   top: "30%",
  //   bottom: "30%",
  //   left: "250px",
  // },
  logo: {
    height: "26px",
    width: "124.09px",
    color: "black",
    cursor: "pointer",
  },

  tabContainer: {
    color: "black",
    "& .MuiTabs-indicator": {
      display: "none",
    },
  },
  tab: {
    textTransform: "none",
    // fontSize: "2rem",
    minHeight: 20,
    // marginLeft: "50px",
    // fontSize: "50px",
    textDecoration: "none",
    "&:hover": {
      color: "#03314B",
      borderBottom: "2px solid #22C870",
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

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (e: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  var flag: boolean = false;
  const handleClose = () => {
    flag = true;
    setAnchorEl(null);
  };

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    flag = false;
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Container style={{ marginLeft: 259, marginRight: 259 }}>
        <AppBar className={classes.root} position='sticky'>
          <Toolbar>
            <Link to='/library'>
              <Box
                component='img'
                src={logo}
                className={classes.logo}
                onClick={() => console.log("image tapped")}
              />
            </Link>
            <Tabs
              disableRipple
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab icon={<SearchIcon />} />
              <Tab
                disableRipple
                className={classes.tab}
                label='Explore'
                icon={flag === false ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                iconPosition='end'
                onClick={openMenu}

                // to='/explore'
                // component={Link}
              />
              <Tab
                disableRipple
                className={classes.tab}
                label='My Library'
                to='/library'
                component={Link}
              />
              <Tab
                disableRipple
                className={classes.tab}
                sx={{ marginLeft: "300px", minHeight: 30 }}
                label='Account'
                icon={<ExpandMoreIcon />}
                iconPosition='end'
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </Container>
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
    </>
  );
};

export default NavBar;
