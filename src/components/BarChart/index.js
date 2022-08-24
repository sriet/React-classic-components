import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import Chart from "react-apexcharts";

import { BoxPanel } from "./../commons/styledComponents/index";

const useStyles = makeStyles({});

const BarChart = () => {
  const classes = useStyles();

  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      stackType: "100%",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    xaxis: {
      categories: [
        "10/15/2019",
        "10/15/2020",
        "10/15/2021",
        "10/15/2022",
        "10/15/2023",
      ],
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "right",
      offsetX: 0,
      offsetY: 50,
    },
    colors: [
      function ({ value, seriesIndex, w }) {
        if (value < 3000) {
          return "#219653";
        } else {
          return "#E0E0E0";
        }
      },
      function ({ value, seriesIndex, w }) {
        if (value < 6728) {
          return "#333";
        } else {
          return "#D9534F";
        }
      },
    ],

    yaxis: {
      min: 0,
      max: 6728,
      tickAmount: 4,
    },
  };

  const series = [
    {
      name: "series-1",
      data: [
        0, 0, 0, 0, 1682, 2200, 2668, 3102, 3364, 3698, 3956, 4065, 5046, 5532,
        5958, 6728,
      ],
    },
  ];

  return (
    <Container>
      <BoxPanel width="50%" sx={{ border: 0 }}>
        <Chart
          options={options}
          series={series}
          type="bar"
          width={500}
          height={320}
        />
      </BoxPanel>
    </Container>
  );
};

BarChart.propTypes = {};

export default BarChart;
