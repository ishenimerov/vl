import { Container, CssBaseline } from '@mui/material';

import TableGrid from './components/table-grid';

function App() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ alignItems: 'center' }} fixed>
        <TableGrid />
      </Container>
    </>
  );
}

export default App;
