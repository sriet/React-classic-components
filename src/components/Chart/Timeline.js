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
            type: 'candlestick',
        },
        colors: ['#56CCF2', '#000'],
        plotOptions: {
            
            boxPlot: {
                colors: {
                upper: '#EB5757',
                lower: '#2F80ED'
                }
            }
        },
        markers: {
          size: 5
        },
        xaxis: {
            min: new Date('2021-12-21').getTime(),
            max: new Date('2022-12-31').getTime(),
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
                    month: "MMM",
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
                right: 0,
                bottom: 0,
                left: 0
            },  
        },
        annotations: {
            points: [
                {
                x: new Date('2022-08-01').getTime(),
                y: 0,
                marker: {
                    size: 0
                },
                image: {
                    path: 'mark_today.svg',
                    width: 50,
                    height: 50,
                    offsetX: 0,
                    offsetY: -20,
                },
                }, {
                x: new Date('2022-10-01').getTime(),
                y: 0,
                marker: {
                    size: 0
                },
                image: {
                    path: 'mark_sabbatical.svg',
                    width: 85,
                    height: 55,
                    offsetX: 2,
                    offsetY: -20,
                },
                }, 
            ],
        },
        
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Line with Annotations',
            align: 'left'
        },
        dataLabels: {
          enabled: false
        },
    };

  const series = [
    {
        name: "series-1",
        type:"scatter",
        data: TimelineProps.data,
    },
    // {
    //     name: 'box',
    //     type: 'boxPlot',
    //     data: [
    //       {
    //         x: new Date('2022-08-01').getTime(),
    //         y: [0, 3, 5, 5],
    //       },
    //       {
    //         x: new Date('2022-10-01').getTime(),
    //         y: [0, 3, 3, 5, 5],
    //       },
    //     ]
    // },
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
