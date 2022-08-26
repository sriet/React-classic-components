import * as React from "react";
import { Container } from "@mui/material";
import Chart from "react-apexcharts";

import { BoxPanel } from "./../commons/styledComponents/index";
import { useEffect } from "react";

const BarChart = (props) => {
  const [data, setSeries] = React.useState([]);
  useEffect(() => {
    return () => {
      props.data.map((item) => {
        let temp = data;
        temp.push(props.ymax - item);
        setSeries([...temp]);
      });
    };
  }, []);

  const options = {
    chart: {
      id: "apexchart-example",
      stacked: true,
    },
    colors: [
      function ({ value, seriesIndex, w }) {
        if (seriesIndex === 0) {
          if (value < 2600) {
            return "#219653";
          } else {
            return "#333";
          }
        } else {
          return "#E0E0E0";
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
  };

  const series = [
    {
      name: "series-1",
      data: props.data,
    },
    {
      name: "series-2",
      data: data,
    },
  ];

  return (
    <Container>
      <BoxPanel width="fit-content" sx={{ border: 0 }}>
        <Chart
          options={options}
          series={series}
          type="bar"
          height={250}
          width={440}
        />
      </BoxPanel>
    </Container>
  );
};

BarChart.propTypes = {};

export default BarChart;
