import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Logo from "../Assets/CareerCraft_Logo.png";

const navItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { text: "Logout", icon: <ExitToAppIcon />, path: "#" },
];

export default function Sidebar({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
  open,
}) {
  const theme = useTheme();
  const location = useLocation();

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: theme.palette.background.default, // ✅ Sidebar background
        color: theme.palette.text.primary,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "center" : "center",
          gap: 1,
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="CareerCraft Logo"
          sx={{
            height: "auto",
            width: open ? "20%" : 36,
            transition: "all 0.3s",
          }}
        />
        {open && (
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              background: "linear-gradient(90deg, #2196f3, #66bb6a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            CareerCraft
          </Typography>
        )}
      </Toolbar>
      <Divider />
      <List>
        {navItems.map(({ text, icon, path }) => {
          const isActive = location.pathname === path;

          return (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                component={Link}
                to={path}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: 1,
                  backgroundColor: isActive
                    ? theme.palette.action.selected
                    : "transparent",
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                    color: isActive
                      ? theme.palette.primary.main
                      : theme.palette.text.secondary,
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: isActive
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                    fontWeight: isActive ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: theme.palette.background.default,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : 72,
            boxSizing: "border-box",
            overflowX: "hidden",
            transition: "width 0.3s",
            bgcolor: theme.palette.background.default, // ✅ Sidebar bg for permanent
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
