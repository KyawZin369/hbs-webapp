import React from "react";
import Table from "../../../components/Table"; // Import the enhanced Table component
import TableCell from "@mui/material/TableCell/TableCell";
import PageStyle from "@/components/PageStyle";

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  pricePerNight: number;
}

const hotelData: Hotel[] = [
  {
    id: 1,
    name: "Grand Plaza",
    location: "New York",
    rating: 4.5,
    pricePerNight: 250,
  },
  {
    id: 2,
    name: "Sunset Resort",
    location: "Los Angeles",
    rating: 4.0,
    pricePerNight: 180,
  },
  {
    id: 3,
    name: "Oceanview Inn",
    location: "Miami",
    rating: 4.8,
    pricePerNight: 300,
  },
  {
    id: 4,
    name: "Mountain Lodge",
    location: "Denver",
    rating: 4.2,
    pricePerNight: 200,
  },
];

const hotel = () => {

  return (
    <PageStyle 
      pageName="Hotels"
      searchTitle="Search Hotels"
      formTypeTitle="Add Hotel"
      createdForm={null}
      searchFilterForm={null}
      >
      <div>
        <Table
          headers={["ID", "Name", "Location", "Rating", "Price Per Night"]}
          data={hotelData}
          renderRow={(hotel: Hotel) => (
            <>
              <TableCell>{hotel.id}</TableCell>
              <TableCell>{hotel.name}</TableCell>
              <TableCell>{hotel.location}</TableCell>
              <TableCell>{hotel.rating}</TableCell>
              <TableCell>${hotel.pricePerNight}</TableCell>
            </>
          )}
          containerStyles={{
            margin: "20px",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
          }}
          emptyMessage="No hotels available"
        />
      </div>
    </PageStyle>
  );
};

export default hotel;
