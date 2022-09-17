import * as React from "react";
import { Box, Container } from "@mui/material";
import Chart from "react-apexcharts";

const BarChart = (props) => {
  const options = {
    chart: {
      id: "apexchart-example",
      stacked: true,
    },
    colors: [
      function ({ value, seriesIndex, w }) {
          if (value < 2600) {
            return "#219653";
          } else {
            return "#333";
          }
      },
    ],
    xaxis: {
      categories: props.xlabel,
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: props.ymin,
      max: props.ymax,
      tickAmount: 4,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
            e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
            borderRadius: 0,
            columnWidth: '70%',
            barHeight: '70%',
            distributed: false,
            rangeBarOverlap: true,
            rangeBarGroupRows: false,
            colors: {
                ranges: [{
                    from: 0,
                    to: 0,
                    color: undefined
                }],
                backgroundBarColors: ['#E0E0E0'],
                backgroundBarOpacity: 1,
                backgroundBarRadius: 0,
            },
        }
    },
  };

  const series = [
    {
      name: "series-1",
      data: props.data,
    },
  ];

  return (
  <Box sx={{ border: 0, width:'100%' }}>
    <Chart
      options={options}
      series={series}
      type="bar"
      height={250}
      width={'100%'}
    />
  </Box>
  );
};

BarChart.propTypes = {};

export default BarChart;
