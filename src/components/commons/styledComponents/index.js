import { styled } from "@mui/material/styles";
import {
  Typography,
  OutlinedInput,
  NativeSelect,
  Box,
} from "@mui/material";

export const BoxPanel = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    margin: theme.spacing(5),
    border: "1px solid #BDBDBD",
    borderRadius: "4px",
    padding: "12px 16px",
    textAlign: "left",
    color: theme.palette.text.secondary,
    elevation: 0,
}));

export const GrayBoxPanel = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#E0E0E0',
    ...theme.typography.body2,
    margin: theme.spacing(3),  
    borderRadius:'4px',
    padding:'16px 35px',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    elevation: 0
}));

export const TypoItem = styled(Typography)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    fontSize:"20px",
    padding: theme.spacing(0, 0),
    textAlign: 'left',
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    fontWeight: 'bold'
}));

export const PriceLabel = styled(Typography)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(0, 0),
    textAlign: "left",
    color: theme.palette.text.secondary,
    fontWeight: "light",
    fontSize: "12px",
}));

export const PriceValue = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight:'38.73px'
}));

export const StockInput = styled(OutlinedInput)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    fontSize: "16px",
    width: "100%",
    "> input": {
        padding: "6px 8px 6px 8px",
    },
}));

export const StockTableInput = styled(OutlinedInput)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    fontsize:'14px',
    direction:'rtl',
    width:'100%',
    "> input": {
        padding: '6px 8px 6px 8px',
    }
}));

export const StockSelect = styled(NativeSelect)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    width: "100%",
    fontSize: "16px",
    "> select": {
        padding: "6px 8px 6px 8px",
    },
}));

// export const StyledStockSelect = ( props ) => {
//     return <StockSelect input={<OutlinedInput/>} IconComponent={SelectIcon}> {...props} </StockSelect>;
//   }
