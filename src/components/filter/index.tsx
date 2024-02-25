import { Box, TextField, useFormControl } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export function Filters() {
  return (
    <Box
      autoComplete="off"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  );
}

export function SelectField() {
  const { getFields } = useFormContext();

  return <TextField id="outlined-basic" label="Outlined" variant="outlined" />;
}
