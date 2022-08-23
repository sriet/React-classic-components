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
  Stack,
  Link,
  TableFooter,
 } from '@mui/material';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { BoxPanel, TypoItem } from '../commons/styledComponents';
import { Box } from '@mui/system';

const BreakdownTable = styled(Table)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  width:'100%',
  "td, th": {
    padding:'8px 0px', 
    fontSize:'16px',
    border:0 
  },
  "thead th": {
    color:'#828282',
  },
  "tfoot td": {
    color:'#000',
    fontWeight:'700'
  },
}));

const Breakdown = () => {

    const breakdownTableData =[
        {
            Type:'Item1',
            Column1:'$16,823',
            Column2:'$34,411',
            Column3:'19.12%'
        },
        {
            Type:'Item2',
            Column1:'$822',
            Column2:'$1,164',
            Column3:'0.62%'
        },
        {
            Type:'Item3',
            Column1:'$7,928',
            Column2:'$9,780',
            Column3:'5.45%'
        },
        {
            Type:'Item4',
            Column1:'$4,281',
            Column2:'$13,284',
            Column3:'7.38%'
        },
        {
            Type:'Item5',
            Column1:'$281',
            Column2:'$802',
            Column3:'1.48%'
        },
    ]
    const breakdown2TableData =[
        {
            Type:'Item1',
            Column1:'$00,000',
            Column2:'$00,000',
            Column3:'00.00%'
        },
        {
            Type:'Item2',
            Column1:'$000',
            Column2:'$000',
            Column3:'00.00%'
        },
    ]

    return (
        <Container>
        <BoxPanel>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack direction='row' spacing={2} sx={{alignItems:'center'}}>
                        <TypoItem variant="subtitle2">Breakdown</TypoItem>
                        <Stack direction='row' sx={{flexGrow:1, pt:'5px'}}>
                            <Stack direction='row' sx={{ alignItems: "center" }} spacing='5px'>
                                <Typography fontSize='12px' lineHeight="14.52px" color="#828282">
                                Last updated 15 days ago ·
                                </Typography>
                            </Stack>
                            <Stack direction='row' color='#828282' sx={{ alignItems: "center" }} >
                                <Link
                                sx={{
                                    color:'#828282',
                                    display:'flex',
                                    cursor: "pointer",
                                    textDecorationColor: "#828282",
                                }}
                                >
                                    <RefreshOutlinedIcon fontSize="9px" />
                                    <Typography fontSize='12px' lineHeight="15px">
                                        Update
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <BreakdownTable>
                        <TableHead>
                            <TableRow >
                                <TableCell width='35%'>Type</TableCell>
                                <TableCell width='25%'>Column 1</TableCell>
                                <TableCell width='25%'>Column 2</TableCell>
                                <TableCell width='15%'>Column 3</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {breakdownTableData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">{row.Type}</TableCell>
                                    <TableCell>{row.Column1}</TableCell>
                                    <TableCell>{row.Column2}</TableCell>
                                    <TableCell>{row.Column3}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow >
                                <TableCell></TableCell>
                                <TableCell><Box width='60%' pt='16px' sx={{ borderTop:'1px solid #000'}}>$33,259</Box></TableCell>
                                <TableCell><Box width='60%' pt='16px' sx={{ borderTop:'1px solid #000'}}>$61,513</Box></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableFooter>
                    </BreakdownTable>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction='row' spacing={2} sx={{alignItems:'center'}}>
                        <TypoItem variant="subtitle2">Breakdown 2</TypoItem>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <BreakdownTable>
                        <TableHead>
                            <TableRow >
                                <TableCell width='35%'>Type</TableCell>
                                <TableCell width='25%'></TableCell>
                                <TableCell width='25%'>Column 2</TableCell>
                                <TableCell width='15%'>Column 3</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {breakdown2TableData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">{row.Type}</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>{row.Column2}</TableCell>
                                    <TableCell>{row.Column3}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow >
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell><Box width='60%' pt='16px' sx={{ borderTop:'1px solid #000'}}>$23,323</Box></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableFooter>
                    </BreakdownTable>
                </Grid>
            </Grid>
        </BoxPanel>
        </Container>
    );
}

Breakdown.propTypes = {
  children: PropTypes.any
}

export default Breakdown;