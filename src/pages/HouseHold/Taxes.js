import * as React from "react";
import { Container, Grid, Link, Stack, styled, Typography } from "@mui/material"
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { BoxPanel, PriceLabel, PriceValue, TypoItem } from "../../style/styledComponents";
import Gauge from "../../components/Gauge";
import Employer from "../../components/Employer";
import HeatMap from "../../components/HeatMap";
import Title from "../../components/Title";
import Quarterly from "../../components/Quarterly";
import ToolTip from "../../components/ToolTip";

const HeatMapProps = {
    heatMap: [
      { check: 1, title: "Q1" },
      { check: 0, title: "Q2" },
      { check: 0, title: "Q3" },
      { check: 0, title: "Q4" },
    ],
    data: {
      min: 0,
      max: 100,
      status: [
        {
          pattern: 0,
          value: 0,
          // label: "Dim1",
        },
        {
          pattern: 2,
          value: 40,
          // label: "Dim2",
        },
      ],
    },
};

const TitleProps = {
    title:'Taxes on wage income',
    updated: 15,
    col:['Type', 'Withheld to date', 'Year End', '% of wages'],
    breakdown: [
        {
        Type: "Federal Income Tax",
        Column1: 16823,
        Column2: 34411,
        Column3: "19.12%",
        },
        {
        Type: "Medicare",
        Column1: 822,
        Column2: 1164,
        Column3: "0.62%",
        },
        {
        Type: "Social Security (OASDI)",
        Column1: 7928,
        Column2: 9780,
        Column3: "5.45%",
        },
        {
        Type: "State Income Tax",
        Column1: 4281,
        Column2: 13284,
        Column3: "7.38%",
        },
        {
        Type: "State Other (CA DSI)",
        Column1: 281,
        Column2: 802,
        Column3: "1.48%",
        },
    ],
};

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: '#E0E0E0',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#E0E0E0',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
}));

const QuarterlyProps = {
    data: [
          { icon: "check", date: "April 15 2022", text: "Q1 Federal", price: 5035.75 },
          { icon: "check", date: "April 15 2022", text: "Q1 State", price: 423.29 },
          {
            icon: "bankNote",
            date: "Due June 15 2022",
            text: "Q2 Federal",
            price: 5035.75,
          },
          {
            icon: "bankNote",
            date: "Due June 15 2022",
            text: "Q2 State",
            price: 423.29,
          },
          {
            icon: "bankNote",
            date: "Due Sept 15 2022",
            text: "Q3 Federal",
            price: 5035.75,
          },
          {
            icon: "bankNote",
            date: "Due Sept 15 2022",
            text: "Q3 State",
            price: 423.29,
          },
          {
            icon: "bankNote",
            date: "Due Jan 15 2023",
            text: "Q4 Federal",
            price: 5035.75,
          },
          {
            icon: "bankNote",
            date: "Due Jan 15 2023",
            text: "Q4 State",
            price: 423.29,
          },
    ],
};

const ToolTipProps = {
    data: [
      { item: "Qualified", value: 817 },
      { item: "Non-Qualified", value: 121 },
    ],
};

const dims = [
    {
        title: 'Long Term Taxes',
        value: 7500,
        info: 1,
        subtitle: '',
    },
    {
        title: 'Short Term Taxes',
        value: 3225,
        info: 1,
        subtitle: '',
    },
    {
        title: 'Dividend Taxes',
        value: 4275,
        info: 0,
        subtitle: '',
    },
    {
        title: 'Total Investment Taxes',
        value: 4275,
        info: 0,
        subtitle: '',
    },
]

const Taxes = () => {

    return(
        <Grid container spacing={2} mb={15}>
            <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color='#333333' fontSize={24} lineHeight="29px" fontWeight="bold">Holdings</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={0}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Stack direction='column' spacing={1}>
                                <PriceLabel>Total Equity Value</PriceLabel>
                                <Stack direction='row' alignItems='center' spacing={1}>
                                    <Typography fontSize={48} lineHeight="58px">$197,294</Typography>
                                    <HtmlTooltip
                                        title={
                                        <React.Fragment>
                                            <ToolTip {...ToolTipProps} />
                                        </React.Fragment>
                                        }
                                    >
                                        <InfoOutlinedIcon sx={{fontSize:"24px", cursor:'pointer'}} />
                                    </HtmlTooltip>
                                </Stack>
                            </Stack>
                            <Stack direction='column' spacing={1}>
                                <PriceLabel>Total Equity Value</PriceLabel>
                                <Stack direction='row' alignItems='center' spacing={1}>
                                    <Typography fontSize={48} lineHeight="58px">36%</Typography>
                                    <HtmlTooltip
                                        title={
                                        <React.Fragment>
                                            <ToolTip {...ToolTipProps} />
                                        </React.Fragment>
                                        }
                                    >
                                        <InfoOutlinedIcon sx={{fontSize:"24px", cursor:'pointer'}} />
                                    </HtmlTooltip>
                                </Stack>
                            </Stack>
                            <Stack direction='column' spacing={1}>
                                <PriceLabel>Total Equity Value</PriceLabel>
                                <Stack direction='row' alignItems='center' spacing={1}>
                                    <Typography fontSize={48} lineHeight="58px">$84,836</Typography>
                                    <HtmlTooltip
                                        title={
                                        <React.Fragment>
                                            <ToolTip {...ToolTipProps} />
                                        </React.Fragment>
                                        }
                                    >
                                        <InfoOutlinedIcon sx={{fontSize:"24px", cursor:'pointer'}} />
                                    </HtmlTooltip>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <HeatMap {...HeatMapProps} />
                    </Grid>
                    <Grid item xs={12}>
                        <Title {...TitleProps} />
                    </Grid>
                    <Grid item xs={12}>
                        <BoxPanel p={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Stack direction='row' spacing={2} className="align-items-center">
                                        <TypoItem variant="subtitle2">Taxes on investment income</TypoItem>
                                        <Stack direction='row' flexGrow='1' pt='5px'>
                                            <Stack direction='row' spacing='5px'>
                                                <Typography fontSize='0.75rem' lineHeight="14.52px" color="#828282">
                                                Last updated 15 days ago ·
                                                </Typography>
                                            </Stack>
                                            <Stack direction='row' color='#828282' >
                                                <Link color='#828282' className='cursor text-decoration-gray' display='flex' >
                                                    <RefreshOutlinedIcon fontSize="9px" />
                                                    <Typography fontSize='0.75rem' lineHeight="15px">
                                                        Update
                                                    </Typography>
                                                </Link>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    {dims.map((list, index)=>(
                                    <Grid item xs md={3} key={index}>
                                        <Grid container spacing="4px">
                                        <Grid item xs={12}>
                                            <PriceLabel>{list.title}</PriceLabel>
                                        </Grid>
                                        <Grid container item xs={12} spacing={1} alignItems="center">
                                            <Grid item>
                                            {
                                                list.value < 0 &&
                                                (
                                                <PriceValue sx={{color:'#EB5757'}}>-${Math.abs(list.value).toLocaleString('en-US')}</PriceValue>
                                                ) ||
                                                (
                                                <PriceValue>${list.value.toLocaleString('en-US')}</PriceValue>
                                                )
                                            }
                                            </Grid>
                                            <Grid item>
                                            {
                                                list.info === 1 && 
                                                (
                                                    <InfoOutlinedIcon sx={{fontSize:"18px"}} />
                                                )
                                            }
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            {
                                            list.subtitle !=='' &&
                                            (
                                            <PriceLabel>{list.subtitle[0]} ${list.subtitle[1].toLocaleString('en-US')}</PriceLabel>
                                            ) || (
                                            <PriceLabel><br/></PriceLabel>
                                            )
                                            }
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                    ))}
                                </Grid>
                                </Grid>
                            </Grid>
                        </BoxPanel>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color='#333333' fontSize={24} lineHeight="29px" fontWeight="bold">Upcoming Equity Events</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing="4px">
                            <Grid item xs={12}>
                                <PriceLabel>Underwithheld owed by year end</PriceLabel>
                            </Grid>
                            <Grid container item xs={12} spacing={1} alignItems="center">
                                <Grid item>
                                    <Typography fontSize={48} lineHeight="58px">$23,423</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Quarterly {...QuarterlyProps} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Taxes