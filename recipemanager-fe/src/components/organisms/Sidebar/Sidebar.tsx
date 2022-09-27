import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FoodIcon from "../../atoms/Icons/FoodIcon";

const drawerWidth = 180;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          height: "100vh",
          backgroundColor: "#37474F",
          boxSizing: "border-box",
          color: "#ffffff"
        },
      }}
    >
      <Toolbar>Recipe Manager</Toolbar>
      <Box sx={{ overflow: "auto", backgroundColor: "#37474F" }}>
        <List>
          <ListItem key={"Home"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon htmlColor="#ffffff" />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Recipes"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReceiptIcon htmlColor="#ffffff" />
              </ListItemIcon>
              <ListItemText primary={"Recipes"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Ingredients"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FoodIcon color="#ffffff" />
              </ListItemIcon>
              <ListItemText primary={"Ingredients"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
