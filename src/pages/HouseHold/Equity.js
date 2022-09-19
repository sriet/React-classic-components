import { Container, Grid, Stack, Typography } from "@mui/material"

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { PriceLabel, PriceValue } from "../../style/styledComponents";
import Gauge from "../../components/Gauge";
import Employer from "../../components/Employer";
import StrokeGauge from "../../components/commons/strokeGauge";
import ObliqueGauge from "../../components/commons/obliqueGauge";

const GooglePlanProps = {
    title:'Google Stock Plan',
    logo: '',
    price: [
      { title: "Total Value", price: 405203 },
      { title: "Current Value", price: 296250 },
      { title: "$GOOG Price", price: 2370 },
    ],
    progressBarGroup: [
      {
        title: "250 RSUs, 1 Grant ->",
        value: 376830,
        data: {
          min: 125,
          max: 0,

          status: [
            {
              pattern: 4,
              value: 0,
              label: "",
            },
            {
              pattern: 3,
              value: 19,
              label: "19 sell on vest",
            },
            {
              pattern: 5,
              value: 34,
              label: "34 Unvested",
            },
            {
              pattern: 2,
              value: 35,
            },
            {
              pattern: 0,
              value: 72,
              label: "72 Sold",
            },
            {
              pattern: 0,
              value: 125,
              label: "125 Held",
            },
          ],
        },
      },
      {
        title: "ESPP ->",
        value: 28400,
        data: {
          min: 9,
          max: 0,

          status: [
            {
              pattern: 1,
              value: 0,
              label: "",
            },
            {
              pattern: 0,
              value: 3,
              label: "3 Non-qualified",
            },
            {
              pattern: 0,
              value: 9,
              label: "9 Qualified",
            },
          ],
        },
      },
    ],
    updated:23
};
const StripePlanProps = {
    title:'Stripe Stock Plan',
    logo: 'Stripe.png',
    price: [
      { title: "Total Value", price: 128012 },
      { title: "Current Value", price: 128012 },
      { title: "409A Value (Jun 2022)", price: 49.39 },
    ],
    progressBarGroup: [
      {
        title: "7,239 ISOs, 2 Grants ->",
        value: 28400,
        data: {
          min: 5000,
          max: 0,

          status: [
            {
              pattern: 1,
              value: 0,
              label: "",
            },
            {
              pattern: 0,
              value: 1239,
              label: "1,239 Unexercised",
            },
            {
              pattern: 0,
              value: 5000,
              label: "5,000 Exercised",
            },
          ],
        },
      },
    ],
    updated:23
};

const EquityEventData = [
    {
        icon:'certificate_icon.png',
        date:'June 15 2022',
        shares:['3 Shares Held (3 Sold)','Google RSUs']
    },
    {
        icon:'certificate_icon.png',
        date:'September 15 2022',
        shares:['6 Shares Vest','Google RSUs']
    },
    {
        icon:'alert_icon.png',
        date:'September 30 2022',
        shares:['1,283 shares Expire','Stripe NSOs']
    },
    {
        icon:'sale_icon.png',
        date:'Nov 15 2022',
        shares:['5,000 shares qualified','Stripe ISOs']
    },
    {
        icon:'sale_icon.png',
        date:'Dec 1 2022',
        shares:['Google Open Trading Window','Google Stock Plan']
    },
    {
        icon:'certificate_icon.png',
        date:'January 15 2023',
        shares:['6 Shares Vest','Google RSUs']
    },
    {
        icon:'certificate_icon.png',
        date:'April 15 2023',
        shares:['6 Shares Vest','Google RSUs']
    },
    {
        icon:'certificate_icon.png',
        date:'June 15 2023',
        shares:['6 Shares Vest','Google RSUs']
    },
    {
        icon:'certificate_icon.png',
        date:'September 15 2023',
        shares:['6 Shares Vest','Google RSUs']
    },
    {
        icon:'certificate_icon.png',
        date:'January 15 2024',
        shares:['6 Shares Vest','Google RSUs']
    },
    {
        icon:'certificate_icon.png',
        date:'April 15 2024',
        shares:['6 Shares Vest','Google RSUs']
    },
    {
        icon:'certificate_icon.png',
        date:'June 15 2024',
        shares:['5 Shares Vest (Final)','Google RSUs']
    },
]

const Equity = () => {
    // console.log('======', new Date('Dec 1 2023').getFullYear());
    return(
        <Grid container spacing={2} mb={15}>
            <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color='#333333' fontSize={24} lineHeight="29px" fontWeight="bold">Holdings</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={0} alignItems='center' >
                            <Stack direction={{md:'row', xs:'column'}}>
                                <Stack spacing={2} justifyContent='center'>
                                    <PriceLabel>Total Equity Value</PriceLabel>
                                    <Stack direction='row' alignItems='center'>
                                        <Grid item>
                                            <Typography fontSize={48} lineHeight="58px">$533,242</Typography>
                                        </Grid>
                                        <Grid item>
                                            <InfoOutlinedIcon sx={{fontSize:"18 px"}} />
                                        </Grid>
                                    </Stack>
                                </Stack>
                                <Grid container justifyContent='center'>
                                    {/*<Gauge />*/}
                                    <StrokeGauge
                                        max={100}
                                        min={0}
                                        strokeValue={76}
                                        width={130}
                                        height={130}
                                        part1={'Google'}
                                        part2={'Stripe'}
                                    />
                                    <ObliqueGauge
                                        max={100}
                                        min={0}
                                        strokeValue={42}
                                        obliqueValue={66}
                                        width={130}
                                        height={130}
                                        part1={'RSUs'}
                                        part2={'ISOs'}
                                        part3={'ESPP'}
                                    />
                                    <StrokeGauge
                                        max={100}
                                        min={0}
                                        strokeValue={84}
                                        width={130}
                                        height={130}
                                        part1={'Held'}
                                        part2={'Unvested'}
                                    />
                                </Grid>
                            </Stack>
                            {/* <Grid item xs={5}>
                            </Grid> */}
                            {/* <Grid item xs={7}>
                            </Grid> */}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Employer {...GooglePlanProps} />
                    </Grid>
                    <Grid item xs={12}>
                        <Employer {...StripePlanProps} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color='#333333' fontSize={24} lineHeight="29px" fontWeight="bold">Upcoming Equity Events</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {
                              EquityEventData.map((list, index)=>{
                                if (index !== 0)
                                  var year = new Date(EquityEventData[index-1].date).getFullYear();
                                return (
                                new Date(list.date).getFullYear() > year && 
                                    <Grid item xs={12} key={index}>
                                        <Grid container spacing={1} alignItems='center'>
                                            <Grid item xs={12}>
                                              <Typography color='#333333' fontSize={16} lineHeight="19.3px" fontWeight="bold">
                                                {new Date(list.date).getFullYear()}
                                              </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Grid container spacing={1} alignItems="center">
                                                    <Grid item>
                                                        <Grid container>
                                                            <img src={list.icon} alt="" />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography color='#828282' fontSize={16} >{list.date}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Typography color='#333333' fontSize={16} >{list.shares[0]}</Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography color='#828282' fontSize={16} >{list.shares[1]}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid> ||
                                    <Grid item xs={12} key={index}>
                                        <Grid container spacing={1} alignItems='center'>
                                            <Grid item xs={6}>
                                                <Grid container spacing={1} alignItems="center">
                                                    <Grid item>
                                                        <Grid container>
                                                            <img src={list.icon} alt="" />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography color='#828282' fontSize={16} >{list.date}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Typography color='#333333' fontSize={16} >{list.shares[0]}</Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography color='#828282' fontSize={16} >{list.shares[1]}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )}
                                )
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Equity