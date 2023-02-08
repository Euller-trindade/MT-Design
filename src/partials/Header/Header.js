import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@material-ui/icons/Home";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from '@material-ui/icons/Person';

import useStyles from "./Header.style.js";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  const HandleToogleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleMenuClick = (route) => {
    HandleToogleMenu();
    history.push(route);
  };
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => HandleToogleMenu()}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className={classes.title}
          >
            MT-Design
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={() => HandleToogleMenu()}>
        <List>
          <ListItem button onClick={() => handleMenuClick("/")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick("customers/add")}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText>Cadastro de clientes</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick("customers")}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>Lista de clientes</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
export default Header;
