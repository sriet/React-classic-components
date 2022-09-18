import * as React from "react";
import { Box, } from "@mui/material";
import Chart from "react-apexcharts";


const Timeline = (props) => {
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
                    year: 'yyyy MMM',
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
                right: 15,
                bottom: 0,
                left: 15
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
        data: props.data,
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
