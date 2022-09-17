import * as React from "react";
import { Box, Container } from "@mui/material";
import Chart from "react-apexcharts";
import moment from "moment";

const TimelineProps = {
    ymax: 6728,
    ymin: 0,
    xlabel: [
        
    ],
    data: [
        {
            x: new Date('2022-02-09').getTime(),
            y: 0,
        },
        {
            x: new Date('2022-04-09').getTime(),
            y: 0,
        },
        {
            x: new Date('2022-05-09').getTime(),
            y: 0,
        },
        {
            x: new Date('2022-08-09').getTime(),
            y: 0,
        },
        {
            x: new Date('2022-11-09').getTime(),
            y: 0,
        },
    ],
};

const Timeline = () => {
    const options = {
        chart: {
            id: "apexchart-example",
            stacked: true,
            toolbar:{
                show:false
            },
            zoom:{
                enabled:false
            },
            type: 'boxPlot',
        },
        colors: ["#219653"],
        xaxis: {
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: '#78909C',
                height: 15,
                offsetX: 0,
                offsetY: -7
            },
    
            labels: {
                show: true,
                rotate: -45,
                rotateAlways: true,
                minHeight: 60,
                maxHeight: 180,
                datetimeFormatter: {
                    year: 'yyyy',
                    month: "yyyy MMM",
                    day: 'dd MMM',
                    hour: 'HH:mm',
                },
            },
            type: 'datetime',
            tickPlacement: 'on'
        },
        yaxis: {
            show:false,
            seriesName: undefined,
            opposite: false,
            reversed: false,
            // min: 0,
            // max: 3,
            tickAmount: 1,
            forceNiceScale: false,
            floating: false,
            decimalsInFloat: undefined,
        },
        dataLabels: 
            {
            enabled: true,
            enabledOnSeries: [1],
            formatter: function(val, opts) {
                var a = moment(val[0])
                var b = moment(val[1])
                var diff = b.diff(a, 'days')
                return (diff > 1 ? ' days' : 'Today')
            },
            style: {
                colors: ['#fff', '#000']
            }
            },
        legend: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
        grid: {
            yaxis: {
                lines: {
                    show: false
                }
            },  
            padding: {
                top: 0,
                right: 10,
                bottom: 0,
                left: 10
            },  
        },
    };

  const series = [
    {
        name: "series-1",
        type:"scatter",
        data: TimelineProps.data,
    },
    {
        name: 'box',
        type: 'boxPlot',
        data: [
          {
            x: new Date('2022-08-01').getTime(),
            y: [30, 0, 50, 50, 50],
          },
          {
            x: new Date('2022-10-01').getTime(),
            y: [30, 0, 50, 50, 50],
          },
        ]
    },
  ];


  return (
  <Box sx={{ border: 0, width:'100%' }}>
    <Chart
      options={options}
      series={series}
      height={150}
      type={'scatter'}
      width={'100%'}
    />
  </Box>
  );
};

Timeline.propTypes = {};

export default Timeline;
