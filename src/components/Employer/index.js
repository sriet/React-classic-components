import * as React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  Link,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import {
  BoxPanel,
  TypoItem,
  PriceLabel,
  PriceValue,
} from "../commons/styledComponents";
import ProgressBar from "../commons/progressbar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  value: {
    fontSize: "12px !important",
    color: "#000",

  },
  title: {
    fontSize: "12px !important",
    fontWeight: "700 !important",
  },
  progressBack: {
    position: "relative",
    overflow: "hidden",
    display: "block",
    zIndex: "0",
    backgroundColor: "white",
    height: "20px",
    border: "2px solid #333",
  },
  status1: {
    background:
      "repeating-linear-gradient(45deg, #000000, #000000 1px, #ffffff 1px, #ffffff 8px)",
    width: "100%",
    position: "absolute",
    left: "0",
    bottom: "0",
    top: "0",
    transition: "transform .4s linear",
    transformOrigin: "left",
    // backgroundColor: "#1976d2",
  },
  status2: {
    background: "#333",
    width: "100%",
    position: "absolute",
    left: "0",
    bottom: "0",
    top: "0",
    transition: "transform .4s linear",
    transformOrigin: "left",
    // backgroundColor: "#1976d2",
  },
});

const Employer = ( props ) => {

  const classes = useStyles();

  return (
    <Container>
      <BoxPanel>
        <Grid container spacing={3}>
          <Grid container item xs={12}>
            <TypoItem flexGrow='1' variant="subtitle2"></TypoItem>
            <TypoItem variant="subtitle2">Employer</TypoItem>
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={2}>
              {props.price.map((list, index)=>(
                <Grid item xs={'auto'} md={4} key={index}>
                  <Grid container spacing="4px">
                    <Grid item xs={12}>
                      <PriceLabel>{list.title}</PriceLabel>
                    </Grid>
                    <Grid container item xs={12}>
                      <PriceValue pr='5.5px' >${list.price.toLocaleString('en-US')}</PriceValue>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          {props.progressBarGroup.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Grid container spacing={2}>
                <Grid item xs={3} md={3}>
                  <Link color='#000' className="text-decoration-black">
                    <Typography className={classes.title}>
                      {item.title}
                    </Typography>
                  </Link>
                  <Typography className={classes.value}>
                    {item.value}
                  </Typography>
                </Grid>
                <Grid item xs={9} md={9}>
                  <Grid container height='24px'>
                    <ProgressBar {...item.data} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
              <Stack direction='row'>
                <Stack direction='row' flexGrow='1'>
                  <Stack direction='row' spacing='5px'>
                    <Typography fontSize='12px' lineHeight="14.52px">
                      Last updated 48 days ago ·
                    </Typography>
                  </Stack>
                  <Stack direction='row'>
                    <Link color='#828282' className="cursor align-items-start text-decoration-gray">
                      <RefreshOutlinedIcon className="font-16" />
                      <Typography fontSize='12px' lineHeight="15px">
                        Update
                      </Typography>
                    </Link>
                  </Stack>
                </Stack>
                <Stack>
                  <Link className="cursor">
                    View Details
                  </Link>
                </Stack>
              </Stack>
          </Grid>
        </Grid>
      </BoxPanel>
    </Container>
  );
};

Employer.propTypes = {
  children: PropTypes.any,
};

export default Employer;
