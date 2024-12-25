import React from "react";
import Table from "../../../components/Table"; // Import the enhanced Table component
import TableCell from "@mui/material/TableCell/TableCell";
import PageStyle from "@/components/PageStyle";

interface Payment {
  id: number;
  customerName: string;
  amount: number;
  paymentMethod: string;
  paymentDate: string;
  status: string;
}

// Example raw payment data
const paymentData: Payment[] = [
  {
    id: 1,
    customerName: "John Doe",
    amount: 300,
    paymentMethod: "Credit Card",
    paymentDate: "2024-12-10",
    status: "Completed",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    amount: 180,
    paymentMethod: "PayPal",
    paymentDate: "2024-12-11",
    status: "Pending",
  },
  {
    id: 3,
    customerName: "Mark Taylor",
    amount: 400,
    paymentMethod: "Bank Transfer",
    paymentDate: "2024-12-09",
    status: "Failed",
  },
  {
    id: 4,
    customerName: "Emily Davis",
    amount: 250,
    paymentMethod: "Credit Card",
    paymentDate: "2024-12-08",
    status: "Completed",
  },
];

// Define headers for the payment table
const paymentHeaders = [
  "Payment ID",
  "Customer Name",
  "Amount",
  "Payment Method",
  "Payment Date",
  "Status",
];

// Example usage in a table
const PaymentTable = () => {
  return (
    <PageStyle
      pageName="Room"
      searchTitle="Search Room"
      formTypeTitle="Add Room"
      createdForm={null}
      searchFilterForm={null}
      pageCount={3}
      formtypeBoolean={true}
    >
      <div>
        <Table
          headers={paymentHeaders}
          data={paymentData}
          renderRow={(payment: Payment) => (
            <>
              <TableCell>{payment.id}</TableCell>
              <TableCell>{payment.customerName}</TableCell>
              <TableCell>${payment.amount}</TableCell>
              <TableCell>{payment.paymentMethod}</TableCell>
              <TableCell>{payment.paymentDate}</TableCell>
              <TableCell
                style={{
                  color:
                    payment.status === "Completed"
                      ? "green"
                      : payment.status === "Pending"
                      ? "orange"
                      : "red",
                }}
              >
                {payment.status}
              </TableCell>
            </>
          )}
          containerStyles={{
            margin: "20px",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
            maxHeight: "320px",
            overflow: "auto",
          }}
          emptyMessage="No payments available"
        />
      </div>
    </PageStyle>
  );
};

export default PaymentTable;
