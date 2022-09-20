import * as React from 'react';
import { Box, Container, Divider, Grid, OutlinedInput, Typography } from "@mui/material";
import Layout from "../../layout"
import { StockSelect, StyledTab, StyledTabs, TabPanel } from '../../style/styledComponents';
import { SelectIcon } from '../../components/commons/icon/multipleIcons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Income from './Income';
import Equity from './Equity';
import Taxes from './Taxes';

const HouseHold = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
        <Layout>
          <Container>
              <Grid container alignItems='end' pt='45px' mb={3} spacing={2}>
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
                      IconComponent={KeyboardArrowDownIcon}
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