import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { TableItem } from './table-item';

const rows: any[] = [];

export default function TableGrid() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table" sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableItem brand="Бренд" id="ID" price="Цена" product="Названию" />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableItem brand="" id="" price={0} product="" />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
