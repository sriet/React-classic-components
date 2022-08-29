import * as React from "react";
import PropTypes from "prop-types";
import { Container, Grid, OutlinedInput, } from "@mui/material";

import { SelectIcon } from "../commons/icon/multipleIcons";
import {
  GrayBoxPanel,
  TypoItem,
  PriceLabel,
  StockSelect,
} from "../commons/styledComponents";

const Details = (props) => {

  return (
    <Container>
      <GrayBoxPanel>
        <Grid container spacing="8px">
          <Grid item xs={12}>
            <TypoItem variant="subtitle2" gutterBottom>
              Detail
            </TypoItem>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Member</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      value={props.member.value}
                      name="member"
                      onChange={props.handleChange}
                    >
                      {props.member.options.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={2}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Company</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      value={props.company.value}
                      name="company"
                      onChange={props.handleChange}
                    >
                      {props.company.options.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={2.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Frequency</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      value={props.frequency.value}
                      name="frequency"
                      onChange={props.handleChange}
                    >
                      {props.frequency.options.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={1.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Type</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      value={props.type.value}
                      name="type"
                      onChange={props.handleChange}
                    >
                      {props.type.options.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </GrayBoxPanel>
    </Container>
  );
};

Details.propTypes = {
  children: PropTypes.any,
};

export default Details;