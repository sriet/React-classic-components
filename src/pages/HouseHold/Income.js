import Google from "../../components/Google";
import PriceProgress from "../../components/PriceProgress"

import { Box, Button, Container, Grid, Typography } from "@mui/material"
import AddIcon from "@mui/icons-material/Add";

const WageProgressProps = [
    {
        price: 82500,
        totalPrice: 180000,
        info:0
    },
    {
        price: -35475,
        totalPrice: -57600,
        info:1
    },
    {
        price: 47025,
        totalPrice: 122400,
        info:0
    },
]

const InvestmentProgressProps = [
    {
        price: 12138,
        totalPrice: 230381,
        info:0
    },
    {
        price: 4218,
        totalPrice: 8274,
        info:0
    },
    {
        price: 938,
        totalPrice: 2103,
        info:1
    },
]

const GoogleProps1 = {
    title: 'Last Google Paystub',
    logo: 'Google.png',
    dims: [
        {
            title: 'Gross', 
            value: 7500,
            info: 1,
            subtitle: '',
        },
        {
            title: 'Deductions', 
            value: -3225,
            info: 1,
            subtitle: '',
        },
        {
            title: 'Net-to-bank', 
            value: 4275,
            info: 0,
            subtitle: '',
        },
    ],
    updated: 48,
    link_1:['Add Paystub', ''],
    link_2:['View All Paystubs', '']
};

const GoogleProps2 = {
    title: 'Google Stock Plan',
    logo: 'Google.png',
    dims: [
        {
            title: 'Long Term Gains, YTD', 
            value: 12138,
            info: 0,
            subtitle: ['Unrealized', 281394],
        },
        {
            title: 'Short Term Gains, YTD', 
            value: 0,
            info: 0,
            subtitle: ['Unrealized', 18293],
        },
        {
            title: 'Dividends, YTD', 
            value: 0,
            info: 0,
            subtitle: ['Unearned', 0],
        },
    ],
    updated: 91,
    link_1:['Update Investments', ''],
    link_2:['View Details', '']
};

const GoogleProps3 = {
    title: 'TD Ameritrade Brokerage',
    logo: 'Ameritrade.png',
    dims: [
        {
            title: 'Long Term Gains, YTD', 
            value: 0,
            info: 0,
            subtitle: ['Unrealized', 28281],
        },
        {
            title: 'Short Term Gains, YTD', 
            value: 829,
            info: 0,
            subtitle: ['Unrealized', 2184],
        },
        {
            title: 'Dividends, YTD', 
            value: 938,
            info: 0,
            subtitle: ['Unearned', 1271],
        },
    ],
    updated: 2,
    link_1:['Update Investments', ''],
    link_2:['View Details', '']
};

const Income = () => {
    
    return(
        <Grid container spacing={2} mb={15}>
            <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography fontSize={24} fontWeight="700" >Wage Income</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {
                                WageProgressProps.map((item, index) => (
                                    <Grid item xs={12} md={4} key={index}>
                                        <PriceProgress {...item} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Google {...GoogleProps1} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            sx={{
                                fontSize: "12px",
                                padding: "16px",
                                border: "1px dashed #BDBDBD",
                                width:'100%',
                                justifyContent:'start',
                                color:'#828282',
                                textTransform: 'none'
                            }}>
                            <AddIcon sx={{color:'#828282'}}/>
                            <Typography>Add Wage Source</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography fontSize={24} fontWeight="700" >Investment Income</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {
                                InvestmentProgressProps.map((item, index) => (
                                    <Grid item xs={12} md={4} key={index}>
                                        <PriceProgress {...item} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Google {...GoogleProps2} />
                    </Grid>
                    <Grid item xs={12}>
                        <Google {...GoogleProps3} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Income