import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { positions } from '@material-ui/system';
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles({
  drawer: {
    color: "red"
  },
  list: {
    width: "160px",
  },
  listItem: {
    borderBottom: '1px solid #ccc',
  },
  backButton: {
    left: '60px', 
  },
  menuButton: {
    bottom: '20px'
  }
})


const MenuDesplegable = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="container-desplegable">
      <IconButton onClick={toggleMenu} className={classes.menuButton}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer variant="temporary" open={open} onClose={toggleMenu} className={classes.drawer}>
        <IconButton  onClick={toggleMenu} className={classes.backButton} >
          <ArrowBackIosIcon />
        </IconButton>
        <List className={classes.list}>
          {["PROYECTOS", "CONTACTO"].map((text, index) => (
            <ListItem button key={text} className={classes.listItem}>
              <ListItemText primary={text} className={classes.listText}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default MenuDesplegable;
