import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Brightness5Icon from '@mui/icons-material/Brightness5';

export default function piechart() {
  // ตัวอย่างข้อมูล
  const data = [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 400 },
    { name: 'Category C', value: 400 },
    { name: 'Category D', value: 400 },
    { name: 'Category E', value: 400 },
  ];

  // คำนวณรวม value
  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div style={{ position: 'relative', height: '210px', width: '210px', border: '1px solid black' }}>
      <PieChart
        series={[
          {
            data: data,
            arcLabelMinAngle:10,
            innerRadius: 90,
            outerRadius: 99,
            paddingAngle: 0,
            cornerRadius: 0,
            startAngle: 0,
            endAngle: 360,
            cx: "100px",
            cy: "100px",
          },
        ]}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <Brightness5Icon sx={{height:'70px',width:'70px'}}/> 
        <div>{totalValue}</div> 
      </div>
    </div>
  );
}
