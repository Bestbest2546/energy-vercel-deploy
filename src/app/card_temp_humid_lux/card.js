import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
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

  const cardTemp = (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "#F9AE00",
        borderRadius: "10px",
        height: "150px",
        padding: "10px",
        background: "rgb(58,131,238)",
        background:
          "linear-gradient(90deg, rgba(58,131,238,1) 0%, rgba(0,117,255,1) 63%, rgba(0,224,191,1) 100%)",
      }}
    >
      <Grid item xs={12}>
        <Typography
          component="div"
          variant="h6"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          Temperature
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Image src="/temp.svg" alt="" height={50} width={50} />
      </Grid>
      <Grid item xs={4}>
        <Typography
          component="div"
          variant="h3"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          25
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          component="div"
          variant="h4"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          °C
        </Typography>
      </Grid>
    </Grid>
  );

  const cardHumid = (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "#F9AE00",
        borderRadius: "10px",
        height: "150px",
        padding: "10px",
        background: "rgb(82,58,238)",
        background:
          "linear-gradient(90deg, rgba(82,58,238,1) 25%, rgba(0,69,255,1) 100%, rgba(0,91,224,1) 100%)",
      }}
    >
      <Grid item xs={12}>
        <Typography
          component="div"
          variant="h6"
          sx={{ fontWeight: "bold", color: "white" }}
        >
         Humidity
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Image src="/humid.svg" alt="" height={50} width={50} />
      </Grid>
      <Grid item xs={4}>
        <Typography
          component="div"
          variant="h3"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          69.35
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          component="div"
          variant="h4"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          %RH
        </Typography>
      </Grid>
    </Grid>
  );

  const cardLux = (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "#F9AE00",
        borderRadius: "10px",
        height: "150px",
        padding: "10px",
        background: " rgb(238,90,58)",
        background:
          "linear-gradient(90deg, rgba(238,90,58,1) 0%, rgba(255,0,82,1) 30%, rgba(224,0,91,1) 100%)",
      }}
    >
      <Grid item xs={12}>
        <Typography
          component="div"
          variant="h6"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          Light intensity
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Image src="/png/sun (1).png" alt="" height={50} width={50} />
      </Grid>
      <Grid item xs={4}>
        <Typography
          component="div"
          variant="h3"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          4000
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          component="div"
          variant="h4"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          Lux
        </Typography>
      </Grid>
    </Grid>
  );

  return {
    cardTemp,
    cardHumid,
    cardLux,
  };
}
