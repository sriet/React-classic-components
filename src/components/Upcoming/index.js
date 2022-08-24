import * as React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import { RedFlagIcon, GreenFlagIcon } from "../commons/icon/multipleIcons";
import {
  BoxPanel,
  TypoItem,
} from "../commons/styledComponents";

const Upcoming = () => {

  return (
    <Container>
      <BoxPanel width='300px' sx={{border:'none', padding:0}}>
        <Grid container spacing='20px'>
          <Grid container item xs={12}>
            <TypoItem sx={{flexGrow:1, color:'#333333'}} variant="subtitle2">Upcoming Events</TypoItem>
          </Grid>
          <Grid container item xs={12}>
            <Stack spacing={2}>
              <Stack direction='row' sx={{alignItems:'center'}} spacing="12px">
                <RedFlagIcon />
                <Typography color='#333333' fontSize='16px' >Sabbatical</Typography>
                <Typography color='#828282' fontSize='16px' >Oct 10 2022</Typography>
              </Stack>
              <Stack direction='row' sx={{alignItems:'center'}} spacing="12px">
                <GreenFlagIcon />
                <Typography color='#333333' fontSize='16px' >New Job</Typography>
                <Typography color='#828282' fontSize='16px' >Mar 1 2023</Typography>
              </Stack>
              <Stack direction='row' sx={{alignItems:'center'}} spacing="12px">
                <RedFlagIcon />
                <Typography color='#333333' fontSize='16px' >Move to Washington</Typography>
                <Typography color='#828282' fontSize='16px' >Aug 15 2023</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </BoxPanel>
    </Container>
  );
};

Upcoming.propTypes = {
  children: PropTypes.any,
};

export default Upcoming;
