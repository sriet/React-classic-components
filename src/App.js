import "./App.css";
import * as React from "react";

import "@fontsource/inter";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import moment from "moment";

import AddPlan from "./components/AddPlan";
import ISOProgress from "./components/ISOProgress";
import Detail from "./components/Detail";
import Sale from "./components/Sale";
import StockTable from "./components/StockTable";
import Gauge from "./components/Gauge";
import Last from "./components/Last";
import GraphTypes from "./components/GraphTypes";
import Breakdown from "./components/Breakdown";
import Upcoming from "./components/Upcoming";
import ClientsBar from "./components/ClientsBar";
import ClientCard from "./components/ClientCard";
import Google from "./components/Google";
import BarChart from "./components/BarChart";
import TypeProgress from "./components/TypeProgress";
import Employer from "./components/Employer";
import PriceProgress from "./components/PriceProgress";
import ToolTip from "./components/ToolTip";
import Category from "./components/Category";
import Quarterly from "./components/Quarterly";
import EditTier from "./components/EditTier";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const colorMode = React.useContext(ColorModeContext);

  const handleChange = (e, props) => {
    let setData = undefined;
    let temp = {};
    switch (props) {
      case "addPlan":
        temp = AddPlanProps;
        setData = setAddPlanProps;
        break;
      case "detail":
        temp = DetailProps;
        setData = setDetailProps;
        break;
      case "isoProgress":
        temp = ISOProgressProps;
        setData = setISOProgressProps;
        break;
      case "types":
        temp = TypeProgressProps;
        setData = setTypeProgressProps;
        break;
      case "sale":
        temp = SaleProps;
        setData = setSaleProps;
        break;
      case "category":
        temp = CategoryProps;
        setData = setCategoryProps;
        break;
      case "editTier":
        temp = EditTierProps;
        setData = setEditTierProps;
        break;

      default:
        break;
    }
    if (e.target.name === "date" || e.target.name === "expiryDate") {
      temp[e.target.name].value = moment(e.target.value).format("MM/DD/YY");
      setData({ ...temp });
    }
    else if (e.target.name.split('-')[0] === "amount") {
      temp.table[e.target.name.split('-')[1]].amount = e.target.value;
      console.log(e.target.name.split('-')[1], e.target.value)
      setData({ ...temp });

    }
    else {
      temp[e.target.name].value = e.target.value;
      setData({ ...temp });
    }
  };

  //Frame 24 PropsData && GetData
  const addPlanSave = () => {
    console.log("----------", AddPlanProps);
  };
  const [AddPlanProps, setAddPlanProps] = React.useState({
    planId: { value: "Placeholder" },
    type: { value: "ISOa", options: ["ISO", "ISOa", "ISOb"] },
    price: { value: 10.65 },
    date: { value: "2019-10-15" },
    amount1: { value: 6728 },
    expiryDate: { value: "2019-10-15" },
    duration: { value: "48mo", options: ["48mo", "60mo", "72mo"] },
    amount2: { value: "12mo", options: ["12mo", "60mo", "72mo"] },
    yn: { value: "No", options: ["Yes", "No"] },
    extended: { value: "No", options: ["Yes", "No"] },
    handleChange: (e) => handleChange(e, "addPlan"),
    onSave: addPlanSave,
  });

  //Frame 25 PropsData && GetData
  const [DetailProps, setDetailProps] = React.useState({
    instanceName: { value: "Employer" },
    user: {
      value: "Jenny Thompson",
      options: ["Jenny Thompson", "Jenny", "Benny"],
    },
    company: {
      value: "Employer",
      options: ["Employer", "Employer1", "Employer2"],
    },
    currentPrice: { value: 39.49 },
    handleChange: (e) => handleChange(e, "detail"),
  });

  //Frame 21 PropsData && GetData

  const ISOProgressSave = () => {
    console.log("----------", ISOProgressProps);
  };
  const [ISOProgressProps, setISOProgressProps] = React.useState({
    planId: { value: "Placeholder" },
    type: { value: "ISO", options: ["ISO", "ISOa", "ISOb"] },
    price: { value: 10.65 },
    date: { value: "2019-10-15" },
    amount: { value: 6728 },
    expiryDate: { value: "2019-10-15" },
    duration: { value: "123", options: ["123", "1234", "12345"] },
    dropdown: { value: "Type 1", options: ["Type 1", "Type 2", "Type 3"] },
    yn: { value: "No", options: ["Yes", "No"] },
    dropdown2: { value: "No", options: ["Yes", "No"] },
    data: {
      min: 0,
      max: 100,

      status: [
        {
          pattern: 0,
          value: 0,
          label: "Dim1",
        },
        {
          pattern: 2,
          value: 45,
          label: "Dim2",
        },
        {
          pattern: 5,
          value: 64,
        },
        {
          pattern: 3,
          value: 65,
          label: "Dim3",
        },
        {
          pattern: 4,
          value: 90,
          label: "Dim4",
        },
      ],
    },
    handleChange: (e) => handleChange(e, "isoProgress"),
    onSave: ISOProgressSave,
  });

  //Frame 20 PropsData && GetData
  const typeProgressSave = () => {
    console.log("----------", TypeProgressProps);
  };
  const [TypeProgressProps, setTypeProgressProps] = React.useState({
    planId: { value: "Placeholder" },
    type: { default: "Type1", options: ["Type1", "Type2", "Type3"] },
    date: { value: "2019-11-3" },
    amount: { value: 10000 },
    period: {
      default: "Selection #1",
      options: ["Selection #1", "Selection #2", "Selection #3"],
    },
    dropdown: { default: "None", options: ["None"] },
    data: {
      min: 0,
      max: 100,
      status: [
        {
          pattern: 0,
          value: 0,
          label: "Dim1",
        },
        {
          pattern: 2,
          value: 48,
          label: "Dim2",
        },
        {
          pattern: 5,
          value: 67,
        },
        {
          pattern: 3,
          value: 68,
          label: "Dim3",
        },
        {
          pattern: 4,
          value: 90,
          label: "Dim4",
        },
      ],
    },
    handleChange: (e) => handleChange(e, "types"),
    onSave: typeProgressSave,
  });

  //Frame 22,23 PropsData && GetData
  const SaleSave = () => {
    console.log("----------", SaleProps);
  };
  const [SaleProps, setSaleProps] = React.useState({
    employer: {
      value: "Employer",
      options: ["Employer", "Employer1", "Employer2"],
    },
    dropdown: { value: "12345", options: ["12345", "1234", "123"] },
    sold: { value: "12" },
    sell: { value: "Type 2", options: ["Type 2", "Start #1"] },
    salePrice: { value: 2371 },
    saleDate: { value: "10/15/19" },
    table: [
      { id: 1, date: "4/15/2021", total: 8, amount: 8, value: 18968 },
      { id: 2, date: "7/15/2021", total: 2, amount: 0, value: 0 },
      { id: 3, date: "10/15/2021", total: 2, amount: 2, value: 4742 },
      { id: 4, date: "1/15/2021", total: 2, amount: 2, value: 4742 },
    ],
    summary: [2154, 781, 28452],
    handleChange: (e) => handleChange(e, "sale"),
    onSave: SaleSave,
  });

  const EmployerProps = {
    price: [
      { title: "Total", price: 405203 },
      { title: "Current", price: 296250 },
      { title: "Price", price: 2370 },
    ],
    progressBarGroup: [
      {
        title: "250 1 Job ",
        value: 376830,
        data: {
          min: 0,
          max: 100,
  
          status: [
            {
              pattern: 0,
              value: 0,
              label: "Dim1",
            },
            {
              pattern: 2,
              value: 45,
              label: "Dim2",
            },
            {
              pattern: 5,
              value: 64,
            },
            {
              pattern: 3,
              value: 65,
              label: "Dim3",
            },
            {
              pattern: 4,
              value: 90,
              label: "Dim4",
            },
          ],
        },
      },
      {
        title: "Job 2",
        value: 28400,
        data: {
          min: 0,
          max: 100,
  
          status: [
            {
              pattern: 0,
              value: 0,
              label: "Dim1",
            },
            {
              pattern: 1,
              value: 75,
              label: "Dim2",
            },
          ],
        },
      },
    ]
  };
  const StockTableProps = {
    table: [
      {
        Id: "1",
        Date: "10/15/2021",
        Completed: 1,
        TasksDone: 420,
      },
      {
        Id: "2",
        Date: "1/15/2021",
        Completed: 1,
        TasksDone: 420,
      },
      {
        Id: "3",
        Date: "4/15/2021",
        Completed: 1,
        TasksDone: 420,
      },
      {
        Id: "4",
        Date: "7/15/2021",
        Completed: 0,
        TasksDone: 420,
      },
      {
        Id: "5",
        Date: "10/15/2021",
        Completed: 0,
        TasksDone: 420,
      },
      {
        Id: "6",
        Date: "1/15/2021",
        Completed: 0,
        TasksDone: 420,
      },
      {
        Id: "7",
        Date: "4/15/2021",
        Completed: 0,
        TasksDone: 420,
      },
      {
        Id: "8",
        Date: "7/15/2021",
        Completed: 0,
        TasksDone: 420,
      },
      {
        Id: "9",
        Date: "10/15/2021",
        Completed: 0,
        TasksDone: 420,
      },
      {
        Id: "10",
        Date: "1/15/2021",
        Completed: 0,
        TasksDone: 420,
      },
      {
        Id: "11",
        Date: "4/15/2021",
        Completed: 0,
        TasksDone: 420,
      },
      {
        Id: "12",
        Date: "7/15/2021",
        Completed: 0,
        TasksDone: 420,
      },
    ],
  };
  const LastProps = {
    dimentions: [7500, -3225, 4275],
  };
  const BreakdownProps = {
    breakdown: [
      {
        Type: "Item1",
        Column1: 16823,
        Column2: 34411,
        Column3: "19.12%",
      },
      {
        Type: "Item2",
        Column1: 822,
        Column2: 1164,
        Column3: "0.62%",
      },
      {
        Type: "Item3",
        Column1: 7928,
        Column2: 9780,
        Column3: "5.45%",
      },
      {
        Type: "Item4",
        Column1: 4281,
        Column2: 13284,
        Column3: "7.38%",
      },
      {
        Type: "Item5",
        Column1: 281,
        Column2: 802,
        Column3: "1.48%",
      },
    ],
    breakdown2: [
      {
        Type: "Item1",
        Column1: "",
        Column2: 0,
        Column3: "00.00%",
      },
      {
        Type: "Item2",
        Column1: "",
        Column2: 0,
        Column3: "00.00%",
      },
    ],
  };
  const GoogleProps = {
    dims: [
      { dim: 12138, subTitle: 281394 },
      { dim: 0, subTitle: 18293 },
      { dim: 0, subTitle: 0 },
    ],
  };
  const BarChartProps = {
    ymax: 6728,
    ymin: 0,
    xlabel: [
      "10/15/2019",
      "",
      "",
      "",
      "10/15/2020",
      "",
      "",
      "",
      "",
      "10/15/2021",
      "",
      "",
      "",
      "10/15/2022",
      "",
      "",
      "10/15/2023",
    ],
    data: [
      0, 0, 0, 0, 1682, 2000, 2489, 2965, 3364, 3780, 4208, 4692, 5046, 5456,
      5908, 6372, 6728,
    ],
  };
  const UpcomingProps = {
    data:[
      {flag:'red', title:'Sabbatical', date:'Oct 10 2022'},
      {flag:'green', title:'New Job', date:'Mar 1 2023'},
      {flag:'red', title:'Move to Washington', date:'Aug 15 2023'},
    ],
  }
  const PriceProgressProps = {
    price:82500,
    totalPrice:180000,
    progress:'50%',
  }
  const PriceProgressRedProps = {
    price:-35475,
    totalPrice:-57600,
    progress:'60%',
  }
  const ClientCardProps = {
    name:'Suki Wealthmanager',
    title:'MyCo'
  }
  const ToolTipProps = {
    data:[
      {item:'item 1', value:817},
      {item:'item 2', value:121},
    ]
  }

  //Frame 12 PropsData && GetData
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
    YTDAmount: { value: 135.80 },
    handleChange: (e) => handleChange(e, "category"),
  });
  
  //Frame 22,23 PropsData && GetData
  const EditTierSave = () => {
    console.log("----------", EditTierProps);
  };
  const [EditTierProps, setEditTierProps] = React.useState({
    min: { value: 33.00 },
    max: { value: 36.99 },
    percent: { value: "12%" },
    handleChange: (e) => handleChange(e, "editTier"),
    onSave: EditTierSave,
  });
  
  const QuarterlyProps = {
    data:[
      {
        year:2022,
        data:[
          {icon:'check', date:'April 15 2022', text:'Q1', price:5035.75},
          {icon:'check', date:'April 15 2022', text:'Q1', price:423.29},
          {icon:'bankNote', date:'Due June 15 2022', text:'Q2', price:5035.75},
          {icon:'bankNote', date:'Due June 15 2022', text:'Q2', price:423.29},
          {icon:'bankNote', date:'Due Sept 15 2022', text:'Q3', price:5035.75},
          {icon:'bankNote', date:'Due Sept 15 2022', text:'Q3', price:423.29},
        ]
      },
      {
        year:2023,
        data:[
          {icon:'bankNote', date:'Due Jan 15 2022', text:'Q4', price:5035.75},
          {icon:'bankNote', date:'Due Jan 15 2022', text:'Q4', price:423.29},
        ]
      },
    ],
  }


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#777",
        color: "text.primary",
        borderRadius: 1,
        paddingBottom: "100px",
      }}
    >
      Frame17
      <GraphTypes />
      Frame27
      <BarChart {...BarChartProps} />
      Frame24
      <AddPlan {...AddPlanProps} />
      Frame25
      <Detail {...DetailProps} />
      Frame20
      <TypeProgress {...TypeProgressProps} />
      Frame21
      <ISOProgress {...ISOProgressProps} />
      Frame22, Frame23
      <Sale {...SaleProps} />
      Frame26
      <StockTable {...StockTableProps} />
      Frame30
      <Employer {...EmployerProps} />
      Frame31
      <Gauge />
      Frame32
      <Last {...LastProps} />
      Frame19
      <Breakdown {...BreakdownProps} />
      Frame29
      <Upcoming {...UpcomingProps} />
      Frame16
      <PriceProgress {...PriceProgressProps} />
      Frame28
      <PriceProgress {...PriceProgressRedProps} />
      Frame03
      <ClientsBar />
      Frame15
      <ClientCard {...ClientCardProps}/>
      Frame14
      <Google {...GoogleProps} />
      Frame31
      <ToolTip {...ToolTipProps} />
      Frame12
      <Category {...CategoryProps} />
      Frame11
      <Quarterly {...QuarterlyProps} />
      Frame06
      <EditTier {...EditTierProps} />
    </Box>
  );
}

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: "Inter",
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
