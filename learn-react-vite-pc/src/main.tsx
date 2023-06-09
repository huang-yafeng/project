import React from "react";
import {createRoot} from "react-dom/client"
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"

import App from "./App";
import {store,persist} from "./store"
import 'antd/dist/reset.css'

const continent:any=document.getElementById('root');
const root=createRoot(continent);

root.render(
   <Provider store={store}>
       <PersistGate persistor={persist}>
           <App/>
       </PersistGate>
   </Provider>
)