import * as React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Typography,
  Stack,
} from "@mui/material";
import {
  BoxPanel,
} from "../commons/styledComponents";

const ClientCard = (props) => {

  return (
    <Container>
      <BoxPanel height='36px' width='200px' sx={{ border:0, padding:0, backgroundColor:'#686565', borderRadius:'0px' }}>
        <Stack direction='row' alignItems='center' spacing={1}>
          <Stack flexGrow='1' textAlign='right'>
            <Typography fontSize='16px' fontWeight='500' lineHeight='19.3px' color='#fff'>{props.name}</Typography>
            <Typography fontSize='12px' fontWeight='400' lineHeight='14.5px' color='#fff'>{props.title}</Typography>
          </Stack>
          <Stack>
            <img src="Avatar2.png" alt="" width='36px' height='36px' />
          </Stack>
        </Stack>
      </BoxPanel>
    </Container>
  );
};

ClientCard.propTypes = {
  children: PropTypes.any,
};

export default ClientCard;
