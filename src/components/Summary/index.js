import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
  Container,
  Grid,
  Typography,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  TableFooter,
 } from '@mui/material';
import { BoxPanel, TypoItem } from '../commons/styledComponents';
import { makeStyles } from '@mui/styles';


//styles
const useStyles = makeStyles({
  table: { marginLeft:'16px', '& th, & td': {color:'#828282', paddingTop:'4px !important', paddingBottom:'4px !important' }},
  tableHead: { "& td, & th": { padding:0},},
  tableBody: { "& td, & th": { border: 0, padding:0},},
  tableFoot: { "& td, & th": { border: 0, padding:0, color:'#333333', fontSize:'14px'},},
});


const Summary = ( props ) => {

    const classes = useStyles();

    const getSumByKey = (arr, key) => {
        return arr.reduce((accumulator, current) => accumulator + Number(current[key]), 0)
    }

    return (
        <Container>
        <BoxPanel width='40%' sx={{border:0}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TypoItem variant="subtitle2">Summary</TypoItem>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Table className={classes.table}>
                            <TableHead className={classes.tableHead}>
                                <TableRow>
                                    <TableCell width='30%'>Category</TableCell>
                                    <TableCell width='40%' align="right">Current</TableCell>
                                    <TableCell width='30%' align="right">YTD</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className={classes.tableBody}>
                                {props.table.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">{row.category}</TableCell>
                                        <TableCell align="right">{((row.current<0 && '-')||'')+`$`+Math.abs(row.current).toLocaleString('en-US')}</TableCell>
                                        <TableCell align="right">{((row.ytd<0 && '-')||'')+`$`+Math.abs(row.ytd).toLocaleString('en-US')}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter className={classes.tableFoot}>
                                <TableRow>
                                    <TableCell><Typography fontSize='14px' color='#828282'><b>Net</b></Typography></TableCell>
                                    <TableCell align='right'>
                                        <Typography fontSize='14px'>
                                            <b>${getSumByKey(props.table, 'current').toLocaleString('en-US')}</b>
                                        </Typography>
                                    </TableCell>
                                    <TableCell align='right'>
                                        <Typography fontSize='14px'>
                                            <b>${getSumByKey(props.table, 'ytd').toLocaleString('en-US')}</b>
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </Grid>
                </Grid>
            </Grid>
        </BoxPanel>
        </Container>
    );
}

Summary.propTypes = {
  children: PropTypes.any
}

export default Summary;