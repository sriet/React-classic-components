import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Grid,
  Typography,
 } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 0,
  borderColor: 'black',
  borderWidth: '1px',
  borderStyle: 'solid',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    background: 'repeating-linear-gradient(45deg, #000000, #000000 1px, #ffffff 1px, #ffffff 8px)'
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    borderRight: 'black solid 1px',
    // backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    backgroundColor: theme.palette.mode === 'light' ? 'white' : '#308fe8',
  },
}));

const ExTypoItem = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  fontWeight: 'bold'
}));

const ProgressBar = (props) => {

  const {percent} = props;

  const UnexTypoItem = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontWeight: 'bold',
    display: 'inline-block',
    position: 'absolute',
    left: percent <= 80 ? `${percent}%` : '1',
    right: percent > 80 ? 0 : 1,
    
    bottom: 0
  }));
  return (
    <Box sx={{ flexGrow: 1, marginRight: '15px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BorderLinearProgress variant="determinate" value={percent} />
        </Grid>
        <Grid item xs={12} sx={{position: 'relative'}}>
          <ExTypoItem>5,000 Exercised</ExTypoItem>
          <UnexTypoItem>1,239 Unexercised</UnexTypoItem>
        </Grid>
      </Grid>
    </Box>
  );
}


export default ProgressBar;