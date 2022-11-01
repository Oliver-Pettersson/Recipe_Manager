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
import LogoutIcon from "@mui/icons-material/Logout"
import FoodIcon from "../../atoms/Icons/FoodIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthenticationContext";

const drawerWidth = 180;

export default function Sidebar() {
  const {isProcessingAuthentication, logout} = useAuth()
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const isAuth = (path === "/login" || path === "/signup");
  return isAuth || isProcessingAuthentication ? (
    <></>
  ) : (
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
          color: "#ffffff",
        },
      }}
    >
      <Toolbar>Recipe Manager</Toolbar>
      <Box sx={{ overflow: "auto", backgroundColor: "#37474F" }}>
        <List>
          <ListItem key={"Home"} disablePadding>
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon>
                <HomeIcon htmlColor="#ffffff" />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Recipes"} disablePadding>
            <ListItemButton onClick={() => navigate("/recipes")}>
              <ListItemIcon>
                <ReceiptIcon htmlColor="#ffffff" />
              </ListItemIcon>
              <ListItemText primary={"Recipes"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Ingredients"} disablePadding>
            <ListItemButton onClick={() => navigate("/ingredients")}>
              <ListItemIcon>
                <FoodIcon color="#ffffff" />
              </ListItemIcon>
              <ListItemText primary={"Ingredients"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Logout"} disablePadding>
            <ListItemButton onClick={logout}>
              <ListItemIcon>
                <LogoutIcon htmlColor="#ffffff" />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
