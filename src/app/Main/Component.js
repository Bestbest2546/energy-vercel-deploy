import { Toolbar, AppBar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Animation from "../animation/circle";
import Cardpower from "../cardpower/card";

export default function Component() {
  const drawerWidth = 200;
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { Animategrid } = Animation();
  const { cardgrid, cardSolar, cardLoad, cardBatt } = Cardpower();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const dashboard = (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` }, 
          ml: { sm: `${drawerWidth}px` }, 
          background: "rgb(43,46,61)",
          background:"linear-gradient(90deg, rgba(43,46,61,1) 0%, rgba(7,0,55,1) 50%, rgba(2,0,59,1) 100%)",
        }}
        
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#F5F5F5",
          height: "100vh",
        }}
      >
        <Toolbar />
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Grid item xs={6}>
              {cardgrid}
            </Grid>
            <Grid item xs={6}>
              {cardSolar}
            </Grid>
            <Grid item xs={6}>
              {cardLoad}
            </Grid>
            <Grid item xs={6}>
              {cardBatt}
            </Grid>
            <Grid item xs={4}><Item>1</Item></Grid>
            <Grid item xs={4}><Item>1</Item></Grid>
            <Grid item xs={4}><Item>1</Item></Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );

  const installing = (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#2B2E3D",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            INSTALLING
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#343E57",
          height: "100vh",
        }}
      >
        <Toolbar />
        {/* //component */}
      </Box>
    </>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return dashboard;
      case "installing":
        return installing;
      default:
        return dashboard;
    }
  };

  return {
    dashboard,
    installing,
    renderPage,
    setCurrentPage,
    handleDrawerToggle,
    mobileOpen,
  };
}
