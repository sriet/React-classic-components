import { Container, Grid, Stack, Typography } from "@mui/material"

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { PriceLabel, PriceValue } from "../../style/styledComponents";
import Gauge from "../../components/Gauge";
import Employer from "../../components/Employer";
import StrokeGauge from "../../components/commons/strokeGauge";
import ObliqueGauge from "../../components/commons/obliqueGauge";

const Equity = (props) => {
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
                                <Stack spacing={2}>
                                    <PriceLabel>Total Equity Value</PriceLabel>
                                    <Stack direction='row' alignItems='center'>
                                        <Grid item>
                                            <Typography fontSize={48} lineHeight="58px">${props.totalEquityValue.toLocaleString('en-US')}</Typography>
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
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Employer {...props.GoogleStockPlan} />
                    </Grid>
                    <Grid item xs={12}>
                        <Employer {...props.StripeStockPlan} />
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
                              props.EquityEventData.map((list, index)=>{
                                if (index !== 0)
                                  var year = new Date(props.EquityEventData[index-1].date).getFullYear();
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