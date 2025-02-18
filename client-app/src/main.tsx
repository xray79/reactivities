import 'semantic-ui-css/semantic.min.css'
import 'react-calendar/dist/Calendar.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-datepicker/dist/react-datepicker.min.css'
import './app/layout/styles.css' // final styles to override others

import ReactDOM from 'react-dom/client'
import {store, StoreContext} from "./app/stores/store.ts";
import {RouterProvider} from "react-router-dom";
import {router} from "./app/router/Routes.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
      <StoreContext.Provider value={store} >
        <RouterProvider router={router} />
      </StoreContext.Provider>
  // </React.StrictMode>,
)
