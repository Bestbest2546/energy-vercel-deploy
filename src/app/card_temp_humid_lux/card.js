import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function ControlCard() {
  const valuegrid = (
    <Typography
      component="div"
      variant="h3"
      sx={{ marginBottom: "10px", fontWeight: "bold", color: "#696969" }}
    >
      Value
    </Typography>
  );

  const cardgrid = (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CardContent
          sx={{
            alignItems: "start",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{ marginBottom: "40px", fontWeight: "bold", color: "#29ABE2" }}
          >
            Grid
          </Typography>
          <Typography component="div" variant="h8" color="text.secondary">
            power now
          </Typography>
          <Typography
            component="div"
            variant="h6"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
              fontWeight: "bold",
              color: "#696969",
            }}
          >
            {valuegrid} Watt
          </Typography>
          <Divider flexItem />
        </CardContent>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "fit-content",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 150,
            filter: "drop-shadow(1.7px 2px 1px grey)", 
          }}
          image="/png/power-line (2).png"   
          alt=""
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            width: 350,
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "start",
            backgroundColor: "#29ABE2",
            padding: "10px",
          }}
        >
          <Typography component="div" variant="h8" sx={{ color: "white" }}>
            Week
          </Typography>
          <Typography component="div" variant="h5" sx={{ color: "white" }}>
            Power use
          </Typography>
          <Divider flexItem sx={{ color: "white" }} />
          <Typography component="div" variant="h8" sx={{ color: "white" }}>
            Month
          </Typography>
          <Typography component="div" variant="h5" sx={{ color: "white" }}>
            Power use
          </Typography>
        </Box>
      </Box>
    </Card>
  );

  const cardSolar = (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        // justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CardContent
          sx={{
            alignItems: "start",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{ marginBottom: "40px", fontWeight: "bold", color: "#F9AE00" }}
          >
            Solar
          </Typography>
          <Typography component="div" variant="h8" color="text.secondary">
            power now
          </Typography>
          <Typography
            component="div"
            variant="h6"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
              fontWeight: "bold",
              color: "#696969",
            }}
          >
            {valuegrid} Watt
          </Typography>
          <Divider flexItem />
        </CardContent>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "fit-content",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 150,
            filter: "drop-shadow(1.7px 2px 1px grey)", 
          }}
          image="/png/sun.png"
          alt=""
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            width: 350,
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "start",
            backgroundColor: "#F9AE00",
            padding: "10px",
          }}
        >
          <Typography component="div" variant="h8" sx={{ color: "white" }}>
            Week
          </Typography>
          <Typography component="div" variant="h5" sx={{ color: "white" }}>
            Power use
          </Typography>
          <Divider flexItem sx={{ color: "white" }} />
          <Typography component="div" variant="h8" sx={{ color: "white" }}>
            Month
          </Typography>
          <Typography component="div" variant="h5" sx={{ color: "white" }}>
            Power use
          </Typography>
        </Box>
      </Box>
    </Card>
  );

  const cardLoad = (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        // justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CardContent
          sx={{
            alignItems: "start",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{ marginBottom: "40px", fontWeight: "bold", color: "#03B18E" }}
          >
            Load
          </Typography>
          <Typography component="div" variant="h8" color="text.secondary">
            power now
          </Typography>
          <Typography
            component="div"
            variant="h6"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
              fontWeight: "bold",
              color: "#696969",
            }}
          >
            {valuegrid} Watt
          </Typography>
          <Divider flexItem />
        </CardContent>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "fit-content",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 150,
            filter: "drop-shadow(1.7px 2px 1px grey)", 
          }}
          image="/png/green-house.png"
          alt=""
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            width: 350,
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "start",
            backgroundColor: "#03B18E",
            padding: "10px",
          }}
        >
          <Typography component="div" variant="h8" sx={{ color: "white" }}>
            Week
          </Typography>
          <Typography component="div" variant="h5" sx={{ color: "white" }}>
            Power use
          </Typography>
          <Divider flexItem sx={{ color: "white" }} />
          <Typography component="div" variant="h8" sx={{ color: "white" }}>
            Month
          </Typography>
          <Typography component="div" variant="h5" sx={{ color: "white" }}>
            Power use
          </Typography>
        </Box>
      </Box>
    </Card>
  );

 

  return {
    cardgrid,
    cardSolar,
    cardLoad,
  };
}
