import "./styles.css";
import {
  BrowserRouter as Router,
  useRoutes,
  Link,
  Outlet,
} from "react-router-dom";
import CreateInvoice from "./Invoices/createInvoices.jsx";

function Routes() {
  const elements = useRoutes([
    { path: "/", element: <Invoices /> },
    { path: "/create", element: <CreateInvoice /> },
    { path: "/:id", element: <CreateInvoice /> },
  ]);
  return elements;
}

import Invoices from "./Invoices/Invoices.jsx";
export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          {/* <Invoices /> */}
          <Routes />
        </div>
      </Router>
    </>
  );
}
