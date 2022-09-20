import * as React from 'react';
import { Box, Container, Divider, Grid, MenuItem, OutlinedInput, Typography } from "@mui/material";
import Layout from "../../layout"
import { StockSelectCurrent, StyledTab, StyledTabs, TabPanel } from '../../style/styledComponents';
import { SelectIcon } from '../../components/commons/icon/multipleIcons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Income from './Income';
import Equity from './Equity';
import Taxes from './Taxes';

const HouseHold = () => {
  const [value, setValue] = React.useState(0);
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  const [age, setAge] = React.useState(10);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return(
        <Layout>
          <Container>
              <Grid container alignItems='end' pt='45px' mb={3} spacing={2}>
                  <Grid item sx={{flexGrow:'1'}}>
                      <StyledTabs
                          onChange={handleChangeTab}
                          value={value}
                          textColor="inherit"
                      >
                          <StyledTab label="Income" />
                          <StyledTab label="Equity" />
                          <StyledTab label="Taxes"/>
                      </StyledTabs>
                  </Grid>
                  <Grid item>
                      <StockSelectCurrent
                      input={<OutlinedInput />}
                      id="demo-customized-select"
                      IconComponent={KeyboardArrowDownIcon}
                      value={age}
                      onChange={handleChange}
                      name="age"
                      >
                          <MenuItem value={10}>
                              2022(current)
                          </MenuItem >
                          <MenuItem value={20}>
                              2022(current)
                          </MenuItem >
                      </StockSelectCurrent>
                  </Grid>
              </Grid>
              <Divider sx={{mb:'20px'}} />
              <TabPanel value={value} index={0}>
                <Income />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Equity />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Taxes />
              </TabPanel>
          </Container>        
        </Layout>
    )
}

export default HouseHold