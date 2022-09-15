import Google from "../../components/Google";
import PriceProgress from "../../components/PriceProgress"

import { Box, Button, Container, Grid, Typography } from "@mui/material"
import AddIcon from "@mui/icons-material/Add";

const WageProgressProps = [
    {
        price: 82500,
        totalPrice: 180000,
    },
    {
        price: -35475,
        totalPrice: -57600,
    },
    {
        price: 47025,
        totalPrice: 122400,
    },
]

const InvestmentProgressProps = [
    {
        price: 12138,
        totalPrice: 230381,
    },
    {
        price: 4218,
        totalPrice: 8274,
    },
    {
        price: 938,
        totalPrice: 2103,
    },
]

const GoogleProps = {
    dims: [
      { dim: 12138, subTitle: 281394 },
      { dim: 0, subTitle: 18293 },
      { dim: 0, subTitle: 0 },
    ],
};

const Income = () => {
    
    return(
        <Grid container spacing={2} mb={15}>
            <Grid item xs={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography fontSize={24} fontWeight="700" >Wage Income</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {
                                WageProgressProps.map((item, index) => (
                                    <Grid item xs={4} key={index}>
                                        <PriceProgress {...item} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Google {...GoogleProps} />
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
            <Grid item xs={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography fontSize={24} fontWeight="700" >Investment Income</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {
                                InvestmentProgressProps.map((item, index) => (
                                    <Grid item xs={4} key={index}>
                                        <PriceProgress {...item} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Google {...GoogleProps} />
                    </Grid>
                    <Grid item xs={12}>
                        <Google {...GoogleProps} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Income