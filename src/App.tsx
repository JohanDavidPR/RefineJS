import { Refine } from "@refinedev/core";
import { RefineKbarProvider } from "@refinedev/kbar";

import routerProvider from "@refinedev/react-router-v6";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Router } from "./routers";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <Refine routerProvider={routerProvider} >
          <Router />
        </Refine>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
