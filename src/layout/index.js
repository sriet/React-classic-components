import "./index.css"

import { Button, Divider, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Header from "./header"

import EastIcon from '@mui/icons-material/East';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import { LinkIcon } from "../components/commons/icon/multipleIcons";
import Upcoming from "../components/Upcoming";

const UpcomingProps = {
  data: [
    { flag: "red", title: "Sabbatical", date: "Oct 10 2022" },
    { flag: "green", title: "New Job", date: "Mar 1 2023" },
    { flag: "red", title: "Move to Washington", date: "Aug 15 2023" },
  ],
};

const Layout = ({children}) => {
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
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <img src="Avatar1.png" alt="" width='80px' height='80px' />
                                    </Grid>
                                    <Grid item>
                                        <Grid container justifyContent="space-between" direction='column' height='80px' color='#333333'>
                                            <Typography fontSize='1.5rem' fontWeight='600' lineHeight='29px'>Jenny Thompsons</Typography>
                                            <Typography fontSize='1rem' fontWeight='400' lineHeight='19.3px'><b>Software Engineer</b> at <b>Google</b> since June 2018</Typography>
                                            <Typography fontSize='1rem' fontWeight='400' lineHeight='19.3px'>Daly City, California</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{paddingTop:'33px !important'}}>
                        <Grid container spacing={2}>
                            <Grid item flexGrow={1}>
                                
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