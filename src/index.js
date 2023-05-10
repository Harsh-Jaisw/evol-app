import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./Store/index";
import { Provider } from "react-redux";
import Header from "./components/Navbar/Navbar";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
      <ChakraProvider>
      <Header/>
        <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
       
          <App />
          {/* </PersistGate> */}
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  
);
