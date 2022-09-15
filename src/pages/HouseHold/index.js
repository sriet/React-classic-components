import * as React from 'react';
import { Box, Container, Divider, Grid, OutlinedInput, Typography } from "@mui/material";
import Layout from "../../layout"
import { StockSelect, StyledTab, StyledTabs, TabPanel } from '../../style/styledComponents';
import { SelectIcon } from '../../components/commons/icon/multipleIcons';
import Income from './Income';


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