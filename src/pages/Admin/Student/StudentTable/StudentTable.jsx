import React from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";
import axios from "axios";
import { Delete } from "@mui/icons-material";
import { baseServerUrl } from "../../../../constants";
import { toast } from "react-toastify";

const StudentTable = ({ students, setStudents }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseServerUrl}/api/users/users/${id}`);
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student._id !== id)
      );

      toast.success("User Successfully Deleted");
    } catch (error) {
      console.log(error);
      toast.error("Error Deleting User, Try again Later");
    }
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: 3, borderRadius: 2, bgcolor: "#f5f5f5" }}
    >
      <Table sx={{ minWidth: 650, fontFamily: "Arial, sans-serif" }}>
        <TableHead>
          <TableRow sx={{ bgcolor: "#3f51b5" }}>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", fontSize: "1rem", color: "#fff" }}
            >
              <TableSortLabel>Id</TableSortLabel>
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", fontSize: "1rem", color: "#fff" }}
            >
              <TableSortLabel>Name</TableSortLabel>
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", fontSize: "1rem", color: "#fff" }}
            >
              <TableSortLabel>Email</TableSortLabel>
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", fontSize: "1rem", color: "#fff" }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student._id}>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {student._id.slice(-4)}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {student.username}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {student.email}
              </TableCell>
              <TableCell align="center">
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(student._id)}
                >
                  <Delete sx={{ color: "red" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;
