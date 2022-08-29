import * as React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import { BankNoteIcon } from "../commons/icon/multipleIcons";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import {
  BoxPanel,
  TypoItem,
} from "../commons/styledComponents";

const Quarterly = (props) => {

  return (
    <Container>
      <BoxPanel width='430px' sx={{border:'none', padding:0}}>
        <Grid container spacing='20px'>
          <Grid container item xs={12}>
            <TypoItem flexGrow='1' color='#333333 !important' variant="subtitle2">Quarterly</TypoItem>
            <Link className="cursor" fontSize='1rem'>
              Confirm Payment
            </Link>
          </Grid>
          {props.data.map((item, index)=>(
            <Grid item xs={12} key={index}>
              <Grid container spacing={2}>
                <Grid item xs={12} display={((item.year=== 2022 && 'none') || 'block')}>
                  <Typography fontSize='1rem' fontWeight='bold' color="#333333">{item.year}</Typography>
                </Grid>
                {
                  item.data.map((list, i)=>(
                    <Grid item xs={12}  color={list.icon==='bankNote' && '#000'} key={i}>
                      <Grid container>
                        <Grid item xs={1}>
                          {((list.icon==='check' && <CheckCircleOutlineOutlinedIcon sx={{color:"#219653"}} fontSize="small" />) || <BankNoteIcon />) }
                        </Grid>
                        <Grid item xs={5}>
                          {list.date}
                        </Grid>
                        <Grid item xs={3.5}>
                          {list.text}
                        </Grid>
                        <Grid item xs={2.5}>
                          ${list.price}
                        </Grid>
                      </Grid>
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
          ))}
        </Grid>
      </BoxPanel>
    </Container>
  );
};

Quarterly.propTypes = {
  children: PropTypes.any,
};

export default Quarterly;
