import "./App.css";
import * as React from "react";

import "@fontsource/inter";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";

import StockPlan from "./components/StockPlan";
import AddPlan from "./components/AddPlan";
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

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
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
      <BarChart />
      Frame24
      <AddPlan
        {...{
          id: "Placeholder",
          type: "ISOa",
          price: "10.65",
          date: "10/15/19",
          amount: 6728,
          expiryDate: "10/15/19",
          Duration: "48mo",
          yn: "No",
          Extended: "No",
        }}
      />
      Frame25
      <Detail
        {...{
          instanceName: "Employer",
          user: "Jenny Thompson",
          company: "Employer",
          currentPrice: "39.49",
        }}
      />
      Frame22, Frame23
      <Sale
        {...{
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
        }}
      />
      Frame26
      <StockTable
        {...{
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
        }}
      />
      Frame31
      <Gauge />
      Frame32
      <Last
        {...{
          dimentions: [7500, -3225, 4275],
        }}
      />
      GraphTypes
      <GraphTypes />
      Frame19
      <Breakdown
        {...{
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
        }}
      />
      Frame29
      <Upcoming />
      Frame03
      <ClientsBar />
      Frame15
      <ClientCard />
      Frame14
      <Google
        {...{
          dims: [
            { dim: 12138, subTitle: 281394 },
            { dim: 0, subTitle: 18293 },
            { dim: 0, subTitle: 0 },
          ],
        }}
      />
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
