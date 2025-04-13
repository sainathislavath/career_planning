import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Tooltip,
  Divider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from "@mui/material/styles";
import { useThemeMode } from "../context/ThemeContext";

export default function Navbar({
  drawerWidth,
  handleDrawerToggle,
  handleSidebarToggle,
  sidebarOpen,
}) {
  const theme = useTheme();
  const { toggleTheme } = useThemeMode();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${sidebarOpen ? drawerWidth : 72}px)` },
        ml: { sm: `${sidebarOpen ? drawerWidth : 72}px` },
        backgroundColor: "#1976d2",
        transition: "margin 0.3s, width 0.3s",
      }}
    >
      <Toolbar>
        {/* Sidebar toggle */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 1, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleSidebarToggle}
          sx={{ mr: 2, display: { xs: "none", sm: "inline-flex" } }}
        >
          {sidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Dashboard
        </Typography>

        {/* Theme Toggle */}
        <Tooltip title="Toggle Theme">
          <IconButton color="inherit" onClick={toggleTheme}>
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Tooltip>

        {/* Profile Avatar */}
        <Tooltip title="Account">
          <IconButton onClick={handleMenuOpen} sx={{ ml: 1 }}>
            <Avatar
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Bharat Kashyap"
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
        </Tooltip>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            sx: {
              overflow: "visible",
              minWidth: 150, // ✅ default width
              maxWidth: "none", // ✅ allows expansion
              width: "auto", // ✅ auto adjust to content
              backgroundColor: theme.palette.background.paper,
              p: 2,
              borderRadius: 2,
              //   width: 260,
              boxShadow: 6,
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 20,
                width: 10,
                height: 10,
                bgcolor: theme.palette.background.paper,
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
        >
          <Box display="flex" alignItems="center" mb={1}>
            <Avatar
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Bharat Kashyap"
              sx={{ width: 56, height: 56, mr: 2 }}
            />
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                Bharat Kashyap
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                bharatkashyap@outlook.com
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 1 }} />

          <Button
            fullWidth
            variant="outlined"
            startIcon={<LogoutIcon />}
            onClick={() => {
              handleMenuClose();
              console.log("Sign Out clicked");
              // Optional: call logout handler here
            }}
          >
            Sign Out
          </Button>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
