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
import { InfoCircleIcon, AlertSquareIcon } from "../commons/icon/multipleIcons";
import {
  BoxPanel,
  TypoItem,
  PriceLabel,
  PriceValue,
} from "../commons/styledComponents";

const Google = () => {

  return (
    <Container>
      <BoxPanel width='70%'>
        <Grid container spacing={3}>
          <Grid container item xs={12}>
            <TypoItem sx={{flexGrow:1}} variant="subtitle2">Google</TypoItem>
            <img src="Google.png"></img>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={'auto'} md={4}>
                <Grid container spacing="4px">
                  <Grid item xs={12}>
                    <PriceLabel>Dim 1</PriceLabel>
                  </Grid>
                  <Grid container sx={{alignItems:'center'}} item xs={12}>
                    <PriceValue>$12,138</PriceValue>
                  </Grid>
                  <Grid item xs={12}>
                    <PriceLabel>Subtitle $281,394</PriceLabel>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={'auto'} md={4}>
                <Grid container spacing="4px">
                  <Grid item xs={12}>
                    <PriceLabel>Dim 2</PriceLabel>
                  </Grid>
                  <Grid container sx={{alignItems:'center'}} item xs={12}>
                    <PriceValue>0</PriceValue>
                  </Grid>
                  <Grid item xs={12}>
                    <PriceLabel>Subtitle $18,293</PriceLabel>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={'auto'} md={4}>
                <Grid container spacing="4px">
                  <Grid item xs={12}>
                    <PriceLabel>Dim 3</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <PriceValue>0</PriceValue>
                  </Grid>
                  <Grid item xs={12}>
                    <PriceLabel>Subtitle $0</PriceLabel>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
              <Stack direction='row'>
                <Stack direction='row' sx={{flexGrow:1}}>
                  <Stack direction='row' sx={{ alignItems: "center" }} spacing='5px'>
                    <AlertSquareIcon />
                    <Typography fontSize='12px' lineHeight="14.52px" color="#EB5757">
                      Last updated 91 days ago ·
                    </Typography>
                  </Stack>
                  <Stack direction='row' color='#2F80ED' sx={{ alignItems: "center" }} >
                    <Link
                      sx={{
                        display:'flex',
                        cursor: "pointer",
                        textDecorationColor: "#2F80ED",
                      }}
                    >
                      <RefreshOutlinedIcon fontSize="9px" />
                      <Typography fontSize='12px' lineHeight="15px">
                        Update
                      </Typography>
                    </Link>
                  </Stack>
                </Stack>
                <Stack sx={{ alignItems: "center" }} >
                  <Link
                    sx={{
                      cursor: "pointer",
                      textDecorationColor: "#2F80ED",
                    }}
                  >
                    View All
                  </Link>
                </Stack>
              </Stack>
          </Grid>
        </Grid>
      </BoxPanel>
    </Container>
  );
};

Google.propTypes = {
  children: PropTypes.any,
};

export default Google;
