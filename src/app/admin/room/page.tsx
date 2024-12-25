import React from "react";
import Table from "../../../components/Table"; // Import the enhanced Table component
import TableCell from "@mui/material/TableCell/TableCell";
import PageStyle from "@/components/PageStyle";

// Define the Room interface
interface Room {
  id: number;
  hotelName: string;
  roomType: string;
  availability: boolean;
  pricePerNight: number;
  maxOccupancy: number;
}

// Example raw room data
const roomData: Room[] = [
  {
    id: 1,
    hotelName: "Grand Plaza",
    roomType: "Deluxe Suite",
    availability: true,
    pricePerNight: 300,
    maxOccupancy: 4,
  },
  {
    id: 2,
    hotelName: "Sunset Resort",
    roomType: "Standard Room",
    availability: false,
    pricePerNight: 180,
    maxOccupancy: 2,
  },
  {
    id: 3,
    hotelName: "Oceanview Inn",
    roomType: "Oceanfront Suite",
    availability: true,
    pricePerNight: 400,
    maxOccupancy: 5,
  },
  {
    id: 4,
    hotelName: "Mountain Lodge",
    roomType: "Cabin",
    availability: true,
    pricePerNight: 250,
    maxOccupancy: 6,
  },
];

// Define headers for the rooms table
const roomHeaders = [
  "Room ID",
  "Hotel Name",
  "Room Type",
  "Availability",
  "Price Per Night",
  "Max Occupancy",
];

// Example usage in a table
const RoomTable = () => {
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
          headers={roomHeaders}
          data={roomData}
          renderRow={(room: Room) => (
            <>
              <TableCell>{room.id}</TableCell>
              <TableCell>{room.hotelName}</TableCell>
              <TableCell>{room.roomType}</TableCell>
              <TableCell>
                <div
                  style={{
                    backgroundColor: room.availability ? "#62fc86" : "#fc6262",
                    padding: "10px",
                    borderRadius: "40px",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "10px",
                  }}
                >
                  {room.availability ? "Available" : "Unavailable"}
                </div>
              </TableCell>
              <TableCell>${room.pricePerNight}</TableCell>
              <TableCell>{room.maxOccupancy}</TableCell>
            </>
          )}
          containerStyles={{
            margin: "20px",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
            maxHeight: "320px",
            overflow: "auto",
          }}
          emptyMessage="No rooms available"
        />
      </div>
    </PageStyle>
  );
};

export default RoomTable;
