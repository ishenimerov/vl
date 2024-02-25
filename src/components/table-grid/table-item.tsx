import { TableCell, TableRow, tableCellClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

type Props = {
  id: string;
  brand: string;
  product: string;
  price: number | string;
};

export function TableItem(props: Props) {
  return (
    <StyledTableRow sx={{ minWidth: '80%' }}>
      <StyledTableCell component="th" scope="row">
        {props.id}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row">
        {props.product}
      </StyledTableCell>
      <StyledTableCell align="right">{props.brand}</StyledTableCell>
      <StyledTableCell align="right">{props.price}</StyledTableCell>
    </StyledTableRow>
  );
}
