import { Toolbar, AppBar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Animation from "../animation/circle";
import Cardpower from "../cardpower/card";
import CardTML from "../card_temp_humid_lux/card";
import Piechart from "../piechart/piechart";
import Linechart from "../Linechart/power";
import Install from "../install/plan";

export default function Component() {
  const drawerWidth = 200;
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { Animategrid } = Animation();
  const { cardgrid, cardSolar, cardLoad, cardBatt } = Cardpower();
  const { cardTemp, cardHumid, cardLux } = CardTML();

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
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "rgb(34,129,195)",
          background:
            "linear-gradient(0deg, rgba(34,129,195,1) 3%, rgba(2,58,165,1) 83%)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DASHBOARD(DEMO)
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: "100%",
          backgroundColor: "#343E57",
          padding: "20px",
          paddingTop: "90px",
        }}
      >
        <Grid
          container
          rowSpacing={{ xs: 2, sm: 2, md: 3 }}
          columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        >
          <Grid item xs={6} sm={6} md={6}>
            {cardgrid}
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            {cardSolar}
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            {cardLoad}
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            {cardBatt}
          </Grid>
          <Grid item xs={4}>
            {cardLux}
          </Grid>
          <Grid item xs={4}>
            {cardTemp}
          </Grid>
          <Grid item xs={4}>
            {cardHumid}
          </Grid>

          <Grid item xs={6}>
            <Linechart />
          </Grid>
          {/* <Grid item xs={2}>
            <Piechart />
          </Grid>
          <Grid item xs={10}>
            {cardSolar}
          </Grid>
          <Grid item xs={6}>
            {cardLoad}
          </Grid>
          <Grid item xs={6}>
            {cardBatt}
          </Grid>
          <Grid item xs={4}>
            {cardLux}
          </Grid>
          <Grid item xs={4}>
            {cardTemp}
          </Grid>
          <Grid item xs={4}>
            {cardHumid}
          </Grid> */}
        </Grid>
      </Box>
    </>
  );

  const installing = (
    <>
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "rgb(34,129,195)",
          background:
            "linear-gradient(0deg, rgba(34,129,195,1) 3%, rgba(2,58,165,1) 83%)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            INSTALLING(DEMO)
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#343E57",
          padding: "20px",
          paddingTop: "90px",
        }}
      >
        <Grid
          container
          rowSpacing={{ xs: 2, sm: 2, md: 3 }}
          columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Install />
          </Grid>
        </Grid>
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
