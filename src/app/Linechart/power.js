import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";

export default function BasicArea() {
  // สร้างตัวแปร const สำหรับข้อมูลแกน X
  const xAxisData = [
    new Date(2023, 0, 1),
    new Date(2023, 2, 1),
    new Date(2023, 3, 1),
    new Date(2023, 4, 1),
    new Date(2023, 5, 1),
    new Date(2023, 6, 1),
  ];

  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "fit-content",
        borderRadius: "10px",
      }}
    >
      <LineChart
        xAxis={[
          {
            data: xAxisData,
            scaleType: "time",
            valueFormatter: (date) => {
              const d = new Date(date);
              return `${d.getFullYear()}-${(d.getMonth() + 1)
                .toString()
                .padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
            },
          },
        ]}
        series={[
          {
            label: "Load (Watt)",
            color: "#03B18E",
            data: [2000, 5000.5, 2000, 8000.5, 1000.5, 5000],
            area: true,
            area: true,
            showMark: false,
          },
          {
            label: "Solar (Watt)",
            color: "#F9AE00",
            data: [4000, 2000, 3000, 5000, 500, 2000],
            area: true,
            area: true,
            showMark: false,
          },
        ]}
        width={1278}
        height={300}
        margin={{ left: 100 }}
      />
    </Box>
  );
}
