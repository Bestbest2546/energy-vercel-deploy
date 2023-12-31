"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import Showdash from "@/app/Main/Component"


function Home() {
  const {renderPage,setCurrentPage ,handleDrawerToggle,mobileOpen} = Showdash()


  const drawerWidth = 200;
  const logosize = 90;

  const logo = (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2B2E3D",
      }}
    >
      <Image src="/logo.svg" alt="" height={logosize} width={logosize}></Image>
    </Box>
  );


  const drawer = (
    <div>
      <div sx={{ margin: "0px", padding: "0px" }}>{logo}</div>
      <List>
        <ListItemButton onClick={() => setCurrentPage("dashboard")}>
          <LineAxisIcon sx={{ marginRight: "10px", color: "white" }} />
          <ListItemText primary="Dashboard" sx={{ color: "white" }} />
        </ListItemButton>
        <ListItemButton onClick={() => setCurrentPage("installing")}>
          <MailIcon sx={{ marginRight: "10px", color: "white" }} />
          <ListItemText primary="Installing" sx={{ color: "white" }} />
        </ListItemButton>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#2B2E3D",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#2B2E3D",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {renderPage()}
    </Box>
  );
}

export default Home;
