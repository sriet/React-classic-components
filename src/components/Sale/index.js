import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
  Container,
  Grid,
  Typography,
  Divider,
  Link,
  OutlinedInput,
  NativeSelect,
  InputAdornment,
  Box,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  Button,
 } from '@mui/material';

const BoxPanel = styled(Box)(({ theme }) => ({
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
...theme.typography.body2,
margin: theme.spacing(5), 
border:'1px solid #BDBDBD', 
borderRadius:'4px',
padding:'12px 16px',
textAlign: 'left',
color: theme.palette.text.secondary,
elevation: 0
}));
const TypoItem = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1, 0),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  fontWeight: 'bold'
}));
const PriceLabel = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0, 0),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  fontWeight: 'light',
  fontSize: '12px'
}));
const PriceValue = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'left',
  color: theme.palette.text.secondary,
  fontWeight: 'bold',
  fontSize: '32px'
}));
const StockInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  fontSize:'14px',
  width:'100%',
  direction:'rtl',
  "> input": {
    padding: '6px 8px 6px 8px',
  }
}));
const StockSelect = styled(NativeSelect)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  width:'100%',
  fontSize:'16px',
  "> select": {
    padding: '6px 8px 6px 8px',
  }
}));

const StockPlan = () => {
    const inputTypeRef = React.useRef()
    const [inputType, setInputType] = React.useState('Type2')
    const showRefContent = () => {
        setInputType(inputTypeRef.current.value);
        console.log(inputTypeRef.current.value);
    };

    return (
        <Container>
        <BoxPanel>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TypoItem variant="subtitle2" gutterBottom>
                    Sale
                    </TypoItem>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} md={2}>
                            <Grid container spacing='10px'>
                                <Grid item xs={12}>
                                    <PriceLabel>Employer</PriceLabel>
                                </Grid>
                                <Grid item xs={12}>
                                    <StockSelect
                                        input={<OutlinedInput/>}
                                    >
                                        <option >Employer</option>
                                        <option >Employer</option>
                                        <option >Employer</option>
                                    </StockSelect>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} md={1.5}>
                            <Grid container spacing='10px'>
                                <Grid item xs={12}>
                                    <PriceLabel>Dropdown</PriceLabel>
                                </Grid>
                                <Grid item xs={12}>
                                    <StockSelect
                                        input={<OutlinedInput/>}
                                    >
                                        <option >12345</option>
                                        <option >123456</option>
                                        <option >1234567</option>
                                    </StockSelect>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} md={4} >
                            <Grid container spacing='10px'>
                                <Grid item xs={12}>
                                    <PriceLabel>ID</PriceLabel>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography fontSize='16px' fontWeight='500' py={1}>12</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} md={1.5}>
                            <Grid container spacing='10px'>
                                <Grid item xs={12}>
                                    <PriceLabel>Sale</PriceLabel>
                                </Grid>
                                <Grid item xs={12}>
                                    <StockSelect
                                        inputRef={inputTypeRef}
                                        input={<OutlinedInput/>}
                                        onChange={showRefContent}
                                    >
                                        <option >Type2</option>
                                        <option >Start #1</option>
                                        <option >Type4</option>
                                    </StockSelect>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} md={1.5}>
                            <Grid container spacing='10px'>
                                <Grid item xs={12}>
                                    <PriceLabel>Sale Price</PriceLabel>
                                </Grid>
                                <Grid item xs={12}>
                                    <StockInput 
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>} 
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} md={1.5}>
                            <Grid container spacing='10px'>
                                <Grid item xs={12}>
                                    <PriceLabel>Sale Date</PriceLabel>
                                </Grid>
                                <Grid item xs={12}>
                                    <StockInput type='date' />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider sx={{my:'16px'}} />
                </Grid>
                
                <Grid item xs={12} display={inputType==='Type2'?'block':'none'}>
                    <Grid container spacing={2}>
                        <Table sx={{ marginLeft:2 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell width='5%'>Id</TableCell>
                                    <TableCell width='15%' align="right">Date</TableCell>
                                    <TableCell width='15%' align="right">Total</TableCell>
                                    <TableCell width='20%' align="right">Amount</TableCell>
                                    <TableCell width='45%' align="right">Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0, py:'4px' } }}>
                                <TableRow>
                                    <TableCell component="th" scope="row">1</TableCell>
                                    <TableCell align="right">4/15/2021</TableCell>
                                    <TableCell align="right">8</TableCell>
                                    <TableCell align="right">
                                        <StockInput value={'8'} />
                                    </TableCell>
                                    <TableCell align="right">$18,968</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">2</TableCell>
                                    <TableCell align="right">7/15/2021</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">
                                        <StockInput value={'8'} />
                                    </TableCell>
                                    <TableCell align="right">$0</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">3</TableCell>
                                    <TableCell align="right">10/15/2021</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">
                                        <StockInput value={'8'} />
                                    </TableCell>
                                    <TableCell align="right">$4,742</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">4</TableCell>
                                    <TableCell align="right">1/15/2021</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">
                                        <StockInput value={'8'} />
                                    </TableCell>
                                    <TableCell align="right">$4,742</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <Grid item xs={12}>
                            <Grid container px={2}>
                                <Typography fontSize='14px' sx={{ flexGrow:1 }} ><b>Total</b></Typography>
                                <Typography fontSize='14px' width='50%' align="right"><b>$28,452</b></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider sx={{my:'16px'}} />
                </Grid>
                
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <PriceLabel>Summary 1</PriceLabel>
                        </Grid>
                        <Grid item xs={12}>
                            <PriceValue>$2,154</PriceValue>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <PriceLabel>Summary 2</PriceLabel>
                        </Grid>
                        <Grid item xs={12}>
                            <PriceValue>$781</PriceValue>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <PriceLabel>Summary 3</PriceLabel>
                        </Grid>
                        <Grid item xs={12}>
                            <PriceValue>$28,452</PriceValue>
                        </Grid>
                        </Grid>
                    </Grid>

                    </Grid>
                    <Divider sx={{my:'16px'}} />
                </Grid>
                
                <Grid item xs={12}>
                    <Grid container pb='12px' sx={{alignItems:'center'}}>
                        <Link sx={{flexGrow:1, color:'red', cursor:'pointer',}}>Delete Sale</Link>
                        <Button sx={{border:'1px solid gray', borderRadius:'4px', color:'gray', mr:'12px'}}>Cancel</Button>
                        <Button sx={{borderRadius:'4px', color:'white', bgcolor:'#2F80ED'}}>Save</Button>
                    </Grid>
                </Grid>
            </Grid>
        </BoxPanel>
        </Container>
    );
}

StockPlan.propTypes = {
  children: PropTypes.any
}

export default StockPlan;