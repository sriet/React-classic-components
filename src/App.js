import "./App.css";
import * as React from "react";

import "@fontsource/inter";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const colorMode = React.useContext(ColorModeContext);

  const AddPlanProps = {
    id: "Placeholder",
    type: "ISOa",
    price: "10.65",
    date: "2019-10-15",
    amount1: 6728,
    expiryDate: "2019-10-15",
    duration: "48mo",
    amount2: "12mo",
    yn: "No",
    extended: "No",
  };
  const DetailProps = {
    instanceName: "Employer",
    user: "Jenny Thompson",
    company: "Employer",
    currentPrice: "39.49",
  };
  const ISOProgressProps = {
    id: "Placeholder",
    type: "ISO",
    price: "10.65",
    date: "2019-10-15",
    amount: 6728,
    expiryDate: "2019-10-15",
    duration: "123",
    dropdown: "Type 1",
    yn: "No",
    dropdown2: "No",
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
  };
  const TypeProgressProps = {
    id: "Placeholder",
    type: "Type1",
    date: "2019-11-3",
    amount: 6728,
    period: "Selection #1",
    dropdown: "None",
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
  };
  const SaleProps = {
    employer: "Employer",
    dropdown: "12345",
    sold: "12",
    sell: "Type 2",
    salePrice: "2,371",
    saleDate: "10/15/19",
    table: [
      { id: 1, date: "4/15/2021", total: 8, amount: 8, value: 18968 },
      { id: 2, date: "7/15/2021", total: 2, amount: 0, value: 0 },
      { id: 3, date: "10/15/2021", total: 2, amount: 2, value: 4742 },
      { id: 4, date: "1/15/2021", total: 2, amount: 2, value: 4742 },
    ],
    summary: [2154, 781, 28452],
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
      GraphTypesFrame17
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
      Frame31
      <Gauge />
      Frame32
      <Last {...LastProps} />
      Frame19
      <Breakdown {...BreakdownProps} />
      Frame29
      <Upcoming />
      Frame03
      <ClientsBar />
      Frame15
      <ClientCard />
      Frame14
      <Google {...GoogleProps} />
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
