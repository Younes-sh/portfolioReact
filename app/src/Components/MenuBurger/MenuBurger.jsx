import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import {Link} from 'react-router-dom';  
const MenuBurger = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  return (
    <div
      style={{
        marginLeft: "40%",
      }}
    >
      <h2>How to use Menu Component in ReactJS?</h2>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu List
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleClose}>
            <Link style={{color:'white'}} to='/'>Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link style={{color:'white'}} to='/contact'>Contact</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link style={{color:'white'}} to='/projects'>Projects</Link>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>

        </MenuItem> */}
      </Menu>
    </div>
  );
};


export default MenuBurger