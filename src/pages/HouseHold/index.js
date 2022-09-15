import * as React from 'react';
import { Box, Container, Divider, Grid, OutlinedInput, styled, Tab, Tabs, Typography } from "@mui/material";
import Layout from "../../layout"
import { StockSelect } from '../../components/commons/styledComponents';
import { SelectIcon } from '../../components/commons/icon/multipleIcons';
import Income from './Income';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
            <>
            {children}
            </>
        )}
      </div>
    );
}

const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiButtonBase-root': {
        padding:0,
        paddingBottom:'2px',
        minHeight:'0px !important',
        minWidth:'0px !important'
    },
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      height:'1px'
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 60,
      width: '100%',
      backgroundColor: '#000',
    },
    minHeight:'0px !important'
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(16),
      marginRight: theme.spacing(8),
      color: '#000',
      '&.Mui-selected': {
        fontWeight:'700'
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
);

const HouseHold = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <Layout>
          <Container>
              <Grid container alignItems='end' pt='45px'>
                  <Grid item sx={{flexGrow:'1'}}>
                      <StyledTabs
                          onChange={handleChange}
                          value={value}
                          textColor="inherit"
                      >
                          <StyledTab label="Income" />
                          <StyledTab label="Equity" />
                          <StyledTab label="Taxes"/>
                      </StyledTabs>
                  </Grid>
                  <Grid item>
                      <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      // value={props.type.value}
                      // name="type"
                      // onChange={props.handleChange}
                      >
                          <option>
                              2022(current)
                          </option>
                      </StockSelect>
                  </Grid>
              </Grid>
                  <Divider sx={{my:'20px'}} />
              <TabPanel value={value} index={0}>
                <Income />
              </TabPanel>
              <TabPanel value={value} index={1}>
                  <Typography>assdfdf</Typography>
              </TabPanel>
              <TabPanel value={value} index={2}>
                  <Typography>as23df</Typography>
              </TabPanel>
          </Container>        
        </Layout>
    )
}

export default HouseHold