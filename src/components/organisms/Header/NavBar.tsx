import { makeStyles } from "@material-ui/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Container,
  Grid,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NavButton from "../../Atoms/Button/NavButton/NavButton";
// import theme from "../../../Theme/theme";
import { useState } from "react";
import ExpandItems, { ExploreMenu } from "../../Molecules/Menu/ExploreMenu";
import api from "../../configuration/api/BaseUrl";
import { Link } from "react-router-dom";
import CategoryPage from "../../pages/CategoryPage";
import CategoryContext from "../../pages/CategoryContext";
import ExploreBooks from "../Explore/ExploreBooks";
import ExplorePage from "../../pages/Explore";
import { Explore } from "@mui/icons-material";
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
    fontSize: "0.1rem",
    fontWeight: 700,
    // borderBottom: "2px solid transparent",
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

  const [booksCategory, setBooksCategory] = useState([]);

  const handleGetByCategory = async (category: string) => {
    // console.log(category);
    const categoryResult = await api.get(
      `/bookRepository/?category=${category}`
    );
    // <CategoryPage bookList={categoryResult}/>
    // console.log(categoryResult.data)
    setBooksCategory(categoryResult.data);
  };

  return (
    <div>
      <AppBar
        className={classes.root}
        style={{ background: "#FFF" }}
        position='absolute'
      >
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
              icon={<ExpandMoreIcon />}
              iconPosition='end'
              onClick={openMenu}
              // to='/explore'
              // component={Link}
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

      <Menu
        marginThreshold={0}
        style={{ top: "1px" }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        // onMouseLeave={handleClose}

        PaperProps={{
          style: {
            width: "100%",
            maxWidth: "100%",
            left: 0,
            right: 0,
          },
        }}
      >
        <ExploreMenu
          handleMouseOut={() => {}}
          handleGetByCategory={handleGetByCategory}
        />
      </Menu>

      <div>
        {/* {booksCategory && (
          <CategoryContext.Provider value={booksCategory}>
            <ExplorePage />
          </CategoryContext.Provider>
        )} */}
      </div>
    </div>
  );
};

export default NavBar;
