import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderRight: `2px solid ${theme.palette.action.hover}`,
    maxWidth: "1px",
    padding: "6px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    // border: 0,
  },
}));

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("Issuing Country", "CANADA"),
  createData("Composition", "NICKEL"),
  createData("Quality", "BU"),
  createData("Denomination", "5 cents"),
  createData("Year", 1965),
  createData("Weight", "4.54 g"),
  createData("Price", "40$"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{ margin: "4rem 0" }}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
