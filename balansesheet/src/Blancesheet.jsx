import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
`;

function BalanceSheet() {
  return (
    <Main>
      <Container>
        <h1>Balance Sheet</h1>
        <Table>
          <thead>
            <TableRow>
              <TableHeaderCell>Category</TableHeaderCell>
              <TableHeaderCell>Debit Amount (₹)</TableHeaderCell>
              <TableHeaderCell>Credit Amount (₹)</TableHeaderCell>
              <TableHeaderCell>Balance (₹)</TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>Assets</TableCell>
              <TableCell>₹800</TableCell>
              <TableCell>₹0</TableCell>
              <TableCell>₹800</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>   Current Assets</TableCell>
              <TableCell>₹350</TableCell>
              <TableCell>₹0</TableCell>
              <TableCell>₹350</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>      Cash</TableCell>
              <TableCell>₹200</TableCell>
              <TableCell>₹0</TableCell>
              <TableCell>₹200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>      Accounts Receivable</TableCell>
              <TableCell>₹150</TableCell>
              <TableCell>₹0</TableCell>
              <TableCell>₹150</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>   Fixed Assets</TableCell>
              <TableCell>₹450</TableCell>
              <TableCell>₹0</TableCell>
              <TableCell>₹450</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>      Property</TableCell>
              <TableCell>₹200</TableCell>
              <TableCell>₹0</TableCell>
              <TableCell>₹200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>      Equipment</TableCell>
              <TableCell>₹250</TableCell>
              <TableCell>₹0</TableCell>
              <TableCell>₹250</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Liabilities</TableCell>
              <TableCell>₹0</TableCell>
              <TableCell>₹250</TableCell>
              <TableCell>₹250</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>   Current Liabilities</TableCell>
              <TableCell>₹0</TableCell>
              <TableCell>₹150</TableCell>
              <TableCell>₹150</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>      Accounts Payable</TableCell>
              <TableCell>₹0</TableCell>
              <TableCell>₹100</TableCell>
              <TableCell>₹100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>   Long-term Liabilities</TableCell>
              <TableCell>₹0</TableCell>
              <TableCell>₹150</TableCell>
              <TableCell>₹150</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </Container>
    </Main>
  );
}

export default BalanceSheet;
