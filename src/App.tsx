import { Container, CssBaseline } from '@mui/material';

import { Filters } from './components/filter';
import TableGrid from './components/table-grid';

function App() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ alignItems: 'center' }} fixed>
        <Filters />
        <TableGrid />
      </Container>
    </>
  );
}

export default App;
