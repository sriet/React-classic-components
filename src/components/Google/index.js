import * as React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Link,
  Typography,
  Stack,
  styled,
  Modal,
  Box,
  Divider,
  Button,
  Container,
  AppBar,
} from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { AlertSquareIcon } from "../commons/icon/multipleIcons";
import {
  BoxPanel,
  TypoItem,
  PriceLabel,
  PriceValue,
  StyledTabs,
  StyledTab,
  TabPanel,
} from "../../style/styledComponents";
import ToolTip from "../ToolTip";
import Details from "../Details";



const btnCancel = {
  border: "1px solid gray !important",
  color: "gray !important",
  marginRight: "12px !important",
  textTransform: "none !important",
}
const btnSave = {
  border: "1px solid #2F80ED !important",
  textTransform: "none !important",
}

const ToolTipProps = {
  data: [
    { item: "item 1", value: 817 },
    { item: "item 2", value: 121 },
  ],
};

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#E0E0E0',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#E0E0E0',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxHeight: '100%',
  bgcolor: '#fff',
  // boxShadow: 24,
  outline:0,
};

const Google = ( props ) => {

  const [value, setValue] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (e, props) => {
    DetailsProps[e.target.name].value = e.target.value;
    setDetailsProps({ ...DetailsProps });
  };
  
  const [DetailsProps, setDetailsProps] = React.useState({
    member: {
      value: "Jenny Thompson",
      options: ["Jenny Thompson", "Benny Thompson"],
    },
    company: {
      value: "Google",
      options: ["Google"],
    },
    frequency: {
      value: "Twice a month",
      options: ["Twice a month"],
    },
    type: {
      value: "Regular",
      options: ["Regular"],
    },
    handleChange: (e) => handleChange(e, "details"),
  });
  
  // const handleChange = (e, props) => {
  //   DetailsProps[e.target.name].value = e.target.value;
  //   setDetailsProps({ ...DetailsProps });
  // };
  
  const [CategoryProps, setCategoryProps] = React.useState({
    category: {
      value: "Type 1",
      options: ["Type 1", "Type 2", "Type 3"],
    },
    description: { value: "Desciption" },
    recurring: {
      value: "Recurring",
      options: ["Recurring"],
    },
    currentAmount: { value: 33.65 },
    YTDAmount: { value: 135.8 },
    handleChange: (e) => handleChange(e, "category"),
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <BoxPanel p={2} pt="6px">
      <Grid container spacing='10px'>
        <Grid item xs={12}>
          <Grid container alignItems='center'>
            <Grid item flexGrow='1' py="10px">
              <TypoItem variant="subtitle2">{props.title}</TypoItem>
            </Grid>
            <Grid item>
              <img src={props.logo} alt=""></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {props.dims.map((list, index)=>(
              <Grid item xs md={4} key={index}>
                <Grid container spacing="4px">
                  <Grid item xs={12}>
                    <PriceLabel>{list.title}</PriceLabel>
                  </Grid>
                  <Grid container item xs={12} spacing={1} alignItems="center">
                    <Grid item>
                      {
                        list.value < 0 &&
                        (
                          <PriceValue sx={{color:'#EB5757'}}>-${Math.abs(list.value).toLocaleString('en-US')}</PriceValue>
                        ) ||
                        (
                          <PriceValue>${list.value.toLocaleString('en-US')}</PriceValue>
                        )
                      }
                    </Grid>
                    <Grid item>
                      {
                        list.info === 1 && 
                        (
                        <HtmlTooltip
                          title={
                            <React.Fragment>
                              <ToolTip {...ToolTipProps} />
                            </React.Fragment>
                          }
                        >
                            <InfoOutlinedIcon sx={{fontSize:"18px"}} />
                        </HtmlTooltip>
                        )
                      }
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    {
                      list.subtitle !=='' &&
                      (
                      <PriceLabel>{list.subtitle[0]} ${list.subtitle[1].toLocaleString('en-US')}</PriceLabel>
                      ) || (
                      <PriceLabel><br/></PriceLabel>
                      )
                    }
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
            <Stack direction='row'>
              <Stack direction='row' flexGrow='1'>
                <Stack direction='row' className="align-items-center" spacing='5px'>
                  <AlertSquareIcon />
                  <Typography fontSize='0.75rem' lineHeight="14.52px" color="#EB5757">
                    Last updated {props.updated} days ago ·
                  </Typography>
                </Stack>
                <Stack direction='row' color='#2F80ED' className="align-items-center"  >
                  <Link
                    sx={{
                      display:'flex',
                      cursor: "pointer",
                      textDecorationColor: "#2F80ED",
                    }} 
                    onClick={handleOpen}
                  >
                    <RefreshOutlinedIcon fontSize="9px" />
                    <Typography fontSize='0.75rem' lineHeight="15px">
                      {props.link_1[0]}
                    </Typography>
                  </Link>
                </Stack>
              </Stack>
              <Stack  >
                <Link className='cursor'>
                  {props.link_2[0]}
                </Link>
              </Stack>
            </Stack>
        </Grid>
      </Grid>

      {/* Modal */}
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container height='100%'>
            <Grid item xs={8} sx={{borderRight:'1px solid #E0E0E0',}}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Details {...DetailsProps} />
                </Grid>
                <Grid item xs={12}>
                  <Container sx={{height:'80%'}}>
                    <StyledTabs
                      onChange={handleTabChange}
                      value={value}
                      textColor="inherit"
                    >
                      <StyledTab label="Income" />
                      <StyledTab label="Equity" />
                      <StyledTab label="Taxes"/>
                    </StyledTabs>
                    <Divider sx={{my:'20px'}} />
                    <TabPanel value={value} index={0}>
                      {/* <Category {...CategoryProps} /> */}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Typography>assdfdf</Typography>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Typography>as23df</Typography>
                    </TabPanel>
                  </Container>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={12}>
              <Divider />
              <Container>
                <Grid container justifyContent='end' py={4}>
                  <Button className={btnCancel}>
                    Cancel
                  </Button>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    className={btnSave}
                    // onClick={() => props.onSave()}
                  >
                    Save
                  </Button>
                </Grid>
              </Container>
            </Grid>
            {/* <AppBar color="inherit" position="fixed" sx={{bottom:0, top:'auto'}}>
            </AppBar> */}
          </Grid>
        </Box>
      </Modal>
    </BoxPanel>
  );
};

Google.propTypes = {
  children: PropTypes.any,
};

export default Google;
