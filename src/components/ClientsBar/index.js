import * as React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Typography,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EastIcon from '@mui/icons-material/East';
import {
  AvatarTypo,
  BoxPanel,
} from "../commons/styledComponents";
import { LinkIcon } from "../commons/icon/multipleIcons";

const ClientsBar = () => {

  return (
    <Container>
      <BoxPanel component={Paper} height='50px' sx={{ border:0, padding:0 }}>
        <Stack direction='row' alignItems='center'>
          <Stack direction='row' divider={<Divider orientation="vertical" flexItem />} flexGrow='1' spacing={2}>
            <Stack direction='row' alignItems='center' color='#000' spacing={1}>
              <Typography fontSize='20px' lineHeight='24px'>Clients</Typography>
              <EastIcon />
              <Typography fontWeight='600' fontSize='20px' lineHeight='24px'>The Thompsons</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' color='#000' spacing={2}>
              <Stack direction='row' alignItems='center' spacing={1}>
                <img src="Avatar1.png" alt="" width='32px' height='32px' />
                <Stack>
                  <Typography fontSize='16px' fontWeight='500' lineHeight='19.3px' color='#333333'>Jenny Thompsons</Typography>
                  <Typography fontSize='12px' fontWeight='400' lineHeight='14.5px' color='#828282'>Sub title</Typography>
                </Stack>
              </Stack>
              <Stack direction='row' alignItems='center' spacing={1}>
                <AvatarTypo>BT</AvatarTypo>
                <Stack>
                  <Typography fontSize='16px' fontWeight='500' lineHeight='19.3px' color='#333333'>Benny Thompsons</Typography>
                  <Typography fontSize='12px' fontWeight='400' lineHeight='14.5px' color='#828282'>Sub title</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2} alignItems='center'>
            <LinkIcon />
            <MoreHorizIcon />
          </Stack>
        </Stack>
      </BoxPanel>
    </Container>
  );
};

ClientsBar.propTypes = {
  children: PropTypes.any,
};

export default ClientsBar;