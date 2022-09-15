import * as React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  Link,
  Typography,
  Stack,
} from "@mui/material";
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { AlertSquareIcon } from "../commons/icon/multipleIcons";
import {
  BoxPanel,
  TypoItem,
  PriceLabel,
  PriceValue,
} from "../commons/styledComponents";

const Google = ( props ) => {

  return (
    <BoxPanel p={2} pt="6px">
      <Grid container spacing='10px'>
        <Grid item xs={12}>
          <Grid container alignItems='center'>
            <Grid item flexGrow='1'>
              <TypoItem variant="subtitle2">Google</TypoItem>
            </Grid>
            <Grid item>
              <img src="Google.png" alt=""></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {props.dims.map((item, index)=>(
              <Grid item xs={'auto'} md={4} key={index}>
                <Grid container spacing="4px">
                  <Grid item xs={12}>
                    <PriceLabel>Dim {index+1}</PriceLabel>
                  </Grid>
                  <Grid container item xs={12}>
                    <PriceValue>${item.dim.toLocaleString('en-US')}</PriceValue>
                  </Grid>
                  <Grid item xs={12}>
                    <PriceLabel>Subtitle ${item.subTitle.toLocaleString('en-US')}</PriceLabel>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
            <Stack direction='row'>
              <Stack direction='row' flexGrow='1'>
                <Stack direction='row' className="align-items-center" spacing='5px'>
                  <AlertSquareIcon />
                  <Typography fontSize='0.75rem' lineHeight="14.52px" color="#EB5757">
                    Last updated 91 days ago ·
                  </Typography>
                </Stack>
                <Stack direction='row' color='#2F80ED' className="align-items-center"  >
                  <Link
                    sx={{
                      display:'flex',
                      cursor: "pointer",
                      textDecorationColor: "#2F80ED",
                    }}
                  >
                    <RefreshOutlinedIcon fontSize="9px" />
                    <Typography fontSize='0.75rem' lineHeight="15px">
                      Update
                    </Typography>
                  </Link>
                </Stack>
              </Stack>
              <Stack  >
                <Link className='cursor'>
                  View All
                </Link>
              </Stack>
            </Stack>
        </Grid>
      </Grid>
    </BoxPanel>
  );
};

Google.propTypes = {
  children: PropTypes.any,
};

export default Google;
