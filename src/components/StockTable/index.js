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
 } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { BoxPanel } from '../commons/styledComponents';

const CompletedTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  width:'100%',
  fontSize:'16px',
  "> td,> th": {
    color:'#219653'
  }
}));

const StockTable = () => {

    const tableData =[
        {
            Id:'1',
            Date:'10/15/2021',
            Completed:1,
            TasksDone:420
        },
        {
            Id:'2',
            Date:'1/15/2021',
            Completed:1,
            TasksDone:420
        },
        {
            Id:'3',
            Date:'4/15/2021',
            Completed:1,
            TasksDone:420
        },
        {
            Id:'4',
            Date:'7/15/2021',
            Completed:0,
            TasksDone:420
        },
        {
            Id:'5',
            Date:'10/15/2021',
            Completed:0,
            TasksDone:420
        },
        {
            Id:'6',
            Date:'1/15/2021',
            Completed:0,
            TasksDone:420
        },
        {
            Id:'7',
            Date:'4/15/2021',
            Completed:0,
            TasksDone:420
        },
        {
            Id:'8',
            Date:'7/15/2021',
            Completed:0,
            TasksDone:420
        },
        {
            Id:'9',
            Date:'10/15/2021',
            Completed:0,
            TasksDone:420
        },
        {
            Id:'10',
            Date:'1/15/2021',
            Completed:0,
            TasksDone:420
        },
        {
            Id:'11',
            Date:'4/15/2021',
            Completed:0,
            TasksDone:420
        },
        {
            Id:'12',
            Date:'7/15/2021',
            Completed:0,
            TasksDone:420
        },
    ]

    return (
        <Container>
        <BoxPanel width='50%' sx={{border:0}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Table sx={{ marginLeft:2 }}>
                            <TableHead>
                                <TableRow sx={{ '> th, td': {color:'#828282', py:'4px' } }}>
                                    <TableCell width='5%'>Id</TableCell>
                                    <TableCell width='15%' align="right">Date</TableCell>
                                    <TableCell width='15%' align="right">Completed</TableCell>
                                    <TableCell width='20%' align="right">Taskes done</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0, py:'4px' } }}>
                                {tableData.map((row, index) => (
                                    (row.Completed===1 && 
                                    <CompletedTableRow key={index}>
                                        <TableCell component="th" scope="row">{row.Id}</TableCell>
                                        <TableCell align="right">{row.Date}</TableCell>
                                        <TableCell align="right"><CheckIcon fontSize='14px'/></TableCell>
                                        <TableCell align="right">{row.TasksDone}</TableCell>
                                    </CompletedTableRow>) ||
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">{row.Id}</TableCell>
                                        <TableCell align="right">{row.Date}</TableCell>
                                        <TableCell align="right"><ClearIcon fontSize='14px'/></TableCell>
                                        <TableCell align="right">{row.TasksDone}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Grid item xs={12}>
                            <Grid container px={2}>
                                <Typography fontSize='14px' sx={{ flexGrow:1 }} ><b>Total</b></Typography>
                                <Typography fontSize='14px' width='50%' align="right"><b>$28,452</b></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </BoxPanel>
        </Container>
    );
}

StockTable.propTypes = {
  children: PropTypes.any
}

export default StockTable;