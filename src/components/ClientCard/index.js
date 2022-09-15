import * as React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import {
  BoxPanel,
} from "../../style/styledComponents";

const ClientCard = (props) => {

  return (
      <Box height='36px' width='200px'>
        <Stack direction='row' alignItems='center' spacing={1}>
          <Stack flexGrow='1' textAlign='right'>
            <Typography fontSize='1rem' fontWeight='500' lineHeight='19.3px' color='#fff'>{props.name}</Typography>
            <Typography fontSize='0.75rem' fontWeight='400' lineHeight='14.5px' color='#fff'>{props.title}</Typography>
          </Stack>
          <Stack>
            <img src="Avatar2.png" alt="" width='36px' height='36px' />
          </Stack>
        </Stack>
      </Box>
  );
};

ClientCard.propTypes = {
  children: PropTypes.any,
};

export default ClientCard;
