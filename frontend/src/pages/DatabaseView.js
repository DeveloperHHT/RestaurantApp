import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const DatabaseView = () => {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchTables();
  }, []);

  const fetchTables = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/database/tables");
      setTables(response.data);
    } catch (error) {
      console.error("Tabloları alırken hata oluştu:", error);
    }
  };

  const fetchTableData = async (tableName) => {
    try {
      const response = await axios.get(`http://localhost:5001/api/database/table/${tableName}`);
      setSelectedTable(tableName);
      setTableData(response.data);
    } catch (error) {
      console.error("Tablo verisini alırken hata oluştu:", error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>📊 Veritabanı Görüntüleyici</Typography>

      <Typography variant="h6">Tablolar:</Typography>
      {tables.map((table) => (
        <button key={table} onClick={() => fetchTableData(table)}>{table}</button>
      ))}

      {selectedTable && (
        <>
          <Typography variant="h5" style={{ marginTop: "20px" }}>{selectedTable} Tablosu</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {tableData.length > 0 && Object.keys(tableData[0]).map((key) => (
                    <TableCell key={key}><b>{key}</b></TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    {Object.values(row).map((value, i) => (
                      <TableCell key={i}>{value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Container>
  );
};

export default DatabaseView;
