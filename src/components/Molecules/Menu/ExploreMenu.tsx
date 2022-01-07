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
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F2FFE9",
  },
  menu: {
    // padding: 0,
  },
});

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
    <Container
      onMouseOut={handleMouseOut}
      maxWidth='sm'
      className={classes.root}
    >
      <TableContainer>
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
                // component={Link}
                // to='/bookRepository/:category'
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
      </TableContainer>
      {/* </Box> */}
    </Container>
  );
};

export default ExploreMenu;
