import RocketIcon from "@mui/icons-material/RocketLaunchOutlined";
import ScienceIcon from "@mui/icons-material/Science";
import PublicIcon from "@mui/icons-material/Public";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SchoolIcon from "@mui/icons-material/School";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import * as React from "react";
import {
  Grid,
  MenuItem,
  Box,
  Container,
  Typography,
  ListItem,
  ListItemIcon,
  Button,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
} from "@material-ui/core";
import theme from "../../configuration/Theme/theme";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 259,
    marginRight: 259,
  },
  menu: {
    // padding: 0,
  },
  buttonStyle: {
    "&:hover": {
      color: "#0365F2",
    },
  },
}));

type ExploreMenuProps = {
  handleGetByCategory: (category: string) => void;
  handleMouseOut: () => void;
};

export const ExploreMenu = ({
  handleGetByCategory,
  handleMouseOut,
}: ExploreMenuProps) => {
  const classes = useStyles();
  return (
    <Container onMouseLeave={handleMouseOut} className={classes.root}>
      {/* <TableContainer>
        <Table className={classes.menu}>
          <TableHead>
            <TableRow>
              <Typography>Explore by catergory</Typography>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell>
              <Button
                size='small'
                startIcon={<RocketIcon />}
                onClick={() => handleGetByCategory("Entrepreneurship")}
                component={Link}
                to='/bookRepository/:category'
              >
                Enterprenourship
              </Button>
            </TableCell>
            <TableCell>
              <Button
                size='small'
                startIcon={<ScienceIcon />}
                onClick={() => handleGetByCategory("Science")}
                component={Link}
                to='/bookRepository/:category'
              >
                Science
              </Button>
            </TableCell>
            <TableCell>
              <Button
                size='small'
                startIcon={<PublicIcon />}
                onClick={() => handleGetByCategory("Economics")}
                component={Link}
                to='/bookRepository/:category'
              >
                Economics
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Button
                size='small'
                startIcon={<AccountBalanceIcon />}
                onClick={() => handleGetByCategory("Politics")}
                component={Link}
                to='/bookRepository/:category'
              >
                Politics
              </Button>
            </TableCell>
            <TableCell>
              <Button
                size='small'
                startIcon={<SchoolIcon />}
                onClick={() => handleGetByCategory("Education")}
                component={Link}
                to='/bookRepository/:category'
              >
                Education
              </Button>
            </TableCell>
            <TableCell>
              <Button
                size='small'
                startIcon={<FitnessCenterIcon />}
                onClick={() => handleGetByCategory("Health")}
                component={Link}
                to='/bookRepository/:category'
              >
                Health
              </Button>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer> */}

      <Grid container direction='row'>
        <Grid item md={12} sm={12} xs={12}>
          <Typography
            variant='subtitle2'
            style={{ borderBottom: "1px solid black" }}
          >
            Explore by category
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Button
            disableFocusRipple={true}
            className={classes.buttonStyle}
            size='small'
            startIcon={<RocketIcon />}
            onClick={() => handleGetByCategory("Entrepreneurship")}
            component={Link}
            to='/bookRepository/:category'
          >
            Enterprenourship
          </Button>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <Button
            className={classes.buttonStyle}
            size='small'
            startIcon={<FitnessCenterIcon />}
            onClick={() => handleGetByCategory("Health")}
            component={Link}
            to='/bookRepository/:category'
          >
            Health
          </Button>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Button
            className={classes.buttonStyle}
            size='small'
            startIcon={<SchoolIcon />}
            onClick={() => handleGetByCategory("Education")}
            component={Link}
            to='/bookRepository/:category'
          >
            Education
          </Button>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <Button
            className={classes.buttonStyle}
            size='small'
            startIcon={<AccountBalanceIcon />}
            onClick={() => handleGetByCategory("Politics")}
            component={Link}
            to='/bookRepository/:category'
          >
            Politics
          </Button>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Button
            className={classes.buttonStyle}
            size='small'
            startIcon={<PublicIcon />}
            onClick={() => handleGetByCategory("Economics")}
            component={Link}
            to='/bookRepository/:category'
          >
            Economics
          </Button>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Button
            className={classes.buttonStyle}
            size='small'
            startIcon={<ScienceIcon />}
            onClick={() => handleGetByCategory("Science")}
            component={Link}
            to='/bookRepository/:category'
          >
            Science
          </Button>
        </Grid>
      </Grid>
      {/* </Box> */}
    </Container>
  );
};

export default ExploreMenu;
