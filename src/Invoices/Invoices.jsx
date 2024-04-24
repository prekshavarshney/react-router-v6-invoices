import "./Invoices.css";
import { useState } from "react";
import { invoices as all_invoices, customers } from "../../placeholder-data";
import { Link } from "react-router-dom";
export default function Invoices() {
  const [invoices, setInvoices] = useState(all_invoices);

  const listOfItems = invoices.map((invoice, index) => {
    // On Edit, router.redirect to edit-form
    //On create , take to create form

    return (
      <li className="invoices-box" key={index}>
        <div className="invoice-header">
          <span className="invoice-left">
            Customer Id : {invoice.customer_id}
          </span>
          <span className="invoice-right">Date : {invoice.date}</span>
        </div>
        <div className="invoice-header">
          <span className="invoice-left">Amount : {invoice.amount}</span>
          <span className="invoice-right">Status : {invoice.status}</span>
        </div>
        <button>
          {" "}
          <Link to={"/" + invoice.customer_id}>Edit</Link>
        </button>
      </li>
    );
  });

  return (
    <>
      <button>
        <Link
          to="/create"
          style={{ padding: 5 }}
          state={{ invoices: invoices }}
        >
          Create Invoice
        </Link>
      </button>
      <ul className="invoices-wrapper">{listOfItems}</ul>;
    </>
  );
}
