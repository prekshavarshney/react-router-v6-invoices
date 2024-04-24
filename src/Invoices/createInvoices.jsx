import { customers, invoices as all_invoices } from "../../placeholder-data";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
export default function CreateInvoice(props) {
  const { id } = useParams();
  const [customerId, setCustomerId] = useState("");
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("pending");
  const [invoices, setInvoices] = useState(all_invoices);

  const customerList = customers.map((customer, index) => {
    return (
      <option key={customer.name + index} value={customer.id}>
        {" "}
        {customer.name}
      </option>
    );
  });
  const selectCustomer = (event) => {
    event.stopPropagation();
    setCustomerId(event.target.value);
  };

  const handleStatusChange = (event) => {
    console.log(event.target.value);
    setStatus(event.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInvoices([
      ...invoices,
      {
        customer_id: customerId,
        amount: amount,
        status: status,
        date: new Date().toLocaleDateString(),
      },
    ]);
  };

  return (
    <>
      <div className="invoice-form-wrapper">
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="customer-id">Customer Id:</label>
            {/* onSelect event */}
            <select
              id="customer-id"
              name="customer-id"
              value={customerId}
              onChange={selectCustomer}
            >
              {customerList}
            </select>
          </div>
          <div>
            <label htmlFor="amount">Amount:</label>
            <input
              id="amount"
              name="amount"
              type="number"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="status">Select Status:</label>
            <input
              type="radio"
              name="status"
              value="pending"
              onChange={handleStatusChange}
            />{" "}
            Pending
            <input
              type="radio"
              name="status"
              value="paid"
              onChange={handleStatusChange}
            />{" "}
            Paid
          </div>
          <button type="submit"> Submit </button>
        </form>
      </div>
    </>
  );
}
