import "./index.css"

import { Button, Divider, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Header from "./header"

import EastIcon from '@mui/icons-material/East';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import { LinkIcon } from "../components/commons/icon/multipleIcons";
import Upcoming from "../components/Upcoming";
import Timeline from "../components/Chart/Timeline";

const UpcomingProps = {
  data: [
    { flag: "red", title: "Sabbatical", date: "Oct 10 2022" },
    { flag: "green", title: "New Job", date: "Mar 1 2023" },
    { flag: "red", title: "Move to Washington", date: "Aug 15 2023" },
  ],
};

const client = {
  avatar:'Avatar1.png',
  name:'Jenny Thompson',
  job:['Software Engineer', 'Google', 'June 2018'],
  location:'Daly City, California'
}

const TimelineProps = {
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
    sabbatical: '2022-10-07',
};
const Layout = ( {children} ) => {
    return(
        <>
            <Header />
            <Container>
                <Grid container spacing={2} pt='40px'>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item flexGrow={1}>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <Typography fontSize='1.25rem' lineHeight='24px'>Clients</Typography>
                                    </Grid>
                                    <Grid item>
                                        <EastIcon />
                                    </Grid>
                                    <Grid item>
                                        <Typography fontWeight='600' fontSize='1.25rem' lineHeight='24px'>The Thompsons</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={2} alignItems='center'>
                                    <Grid item>
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            className='add-btn' 
                                            startIcon={<AddIcon />}
                                        >
                                            <Typography fontSize={16} fontWeight={'400'}>Add</Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <LinkIcon />
                                    </Grid>
                                    <Grid item>
                                        <MoreHorizIcon />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} sx={{paddingTop:'33px !important'}}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Grid container spacing={2} alignItems="center" justifyContent='center'>
                                    <Grid item>
                                        <img src={client.avatar} alt="" width='80px' height='80px' />
                                    </Grid>
                                    <Grid item>
                                        <Grid container maxWidth='350px' height='80px' color='#333333' >
                                            <Typography fontSize='1.5rem' fontWeight='600' lineHeight='29px'>{client.name}</Typography>
                                            <Typography fontSize='1rem' fontWeight='400' lineHeight='19.3px'><b>{client.job[0]}</b> at <b>{client.job[1]}</b> since {client.job[2]}</Typography>
                                            <Typography fontSize='1rem' fontWeight='400' lineHeight='19.3px'>{client.location}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{paddingTop:'33px !important'}}>
                        <Grid container spacing={2}>
                            <Grid item flexGrow={1}>
                                <Timeline {...TimelineProps} />
                            </Grid>
                            <Grid item>
                                <Upcoming {...UpcomingProps} />
                            </Grid>
                        </Grid>
                    </Grid> 
                </Grid>
            </Container>
            {children}
        </>
    )
}

export default Layout