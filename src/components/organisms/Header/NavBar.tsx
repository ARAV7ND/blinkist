// import { makeStyles } from "@material-ui/styles";
import { AppBar, Container, Menu, Tab, Tabs, Toolbar } from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import logo from "../../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import ExpandItems, { ExploreMenu } from "../../Molecules/Menu/ExploreMenu";
import api from "../../configuration/api/BaseUrl";
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
      //backgroundColor: "orange"
    },
  },
  tab: {
    textTransform: "none",
    // fontSize: "2rem",
    marginLeft: "50px",
    // fontSize: "50px",
    "&:hover": {
      textDecoration: "none",
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
  React.useEffect(() => {});

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
    <div>
      <Container style={{ marginLeft: 259, marginRight: 259 }}>
        <AppBar className={classes.root} position='sticky'>
          <Toolbar>
            <img alt='company logo' src={logo} className={classes.logo} />
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              {/* <Tab icon={<SearchIcon />} /> */}
              <Tab
                className={classes.tab}
                label='Explore'
                icon={flag ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                iconPosition='end'
                onClick={openMenu}

                // to='/explore'
                // component={Link}
              />
              <Tab
                className={classes.tab}
                label='My Library'
                to='/library'
                component={Link}
              />
              <Tab label='Account' />
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
    </div>
  );
};

export default NavBar;
