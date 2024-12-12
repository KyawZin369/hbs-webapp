import React from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  SxProps,
} from "@mui/material";

interface TableProps<T> {
  headers: string[];
  data: T[];
  renderRow: (row: T) => React.ReactNode;
  containerStyles?: SxProps;
  tableStyles?: SxProps;
  emptyMessage?: string;
}

export default function Table<T>({
  headers,
  data,
  renderRow,
  containerStyles,
  tableStyles,
  emptyMessage = "No data available",
}: TableProps<T>) {
  return (
    <TableContainer component={Paper} sx={containerStyles}>
      <MuiTable sx={{ minWidth: 650, ...tableStyles }} aria-label="custom table" stickyHeader>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell
                key={header}
                sx={{
                  backgroundColor: "#F5F5F5",
                  fontWeight: "bold",
                  borderBottom: "1px solid #E1E1E1",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                {renderRow(row)}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={headers.length} align="center">
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
