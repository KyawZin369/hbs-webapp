import React from "react";
import Table from "../../../components/Table"; // Import the enhanced Table component
import TableCell from "@mui/material/TableCell/TableCell";
import PageStyle from "@/components/PageStyle";

interface Booking {
  id: number;
  customerName: string;
  hotelName: string;
  checkInDate: string;
  checkOutDate: string;
  totalAmount: number;
}

// Example raw booking data
const bookingData: Booking[] = [
  {
    id: 1,
    customerName: "John Doe",
    hotelName: "Grand Plaza",
    checkInDate: "2024-01-10",
    checkOutDate: "2024-01-15",
    totalAmount: 1250,
  },
  {
    id: 2,
    customerName: "Jane Smith",
    hotelName: "Sunset Resort",
    checkInDate: "2024-02-01",
    checkOutDate: "2024-02-05",
    totalAmount: 720,
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    hotelName: "Oceanview Inn",
    checkInDate: "2024-03-15",
    checkOutDate: "2024-03-20",
    totalAmount: 1500,
  },
  {
    id: 4,
    customerName: "Bob Brown",
    hotelName: "Mountain Lodge",
    checkInDate: "2024-04-10",
    checkOutDate: "2024-04-12",
    totalAmount: 400,
  },
];

// Define headers for the booking table
const bookingHeaders = [
  "Booking ID",
  "Customer Name",
  "Hotel Name",
  "Check-In Date",
  "Check-Out Date",
  "Total Amount",
];

// Example usage in a table
const BookingTable = () => {
  return (
    <PageStyle
      pageName="Booking"
      searchTitle="Search Booking"
      createdForm={null}
      searchFilterForm={null}
      pageCount={3}
      formtypeBoolean={false}
    >
      <div>
        <Table
          headers={bookingHeaders}
          data={bookingData}
          renderRow={(booking: Booking) => (
            <>
              <TableCell>{booking.id}</TableCell>
              <TableCell>{booking.customerName}</TableCell>
              <TableCell>{booking.hotelName}</TableCell>
              <TableCell>{booking.checkInDate}</TableCell>
              <TableCell>{booking.checkOutDate}</TableCell>
              <TableCell>${booking.totalAmount}</TableCell>
            </>
          )}
          containerStyles={{
            margin: "20px",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
            maxHeight: "320px",
            overflow: "auto",
          }}
          emptyMessage="No bookings available"
        />
      </div>
    </PageStyle>
  );
};

export default BookingTable;
