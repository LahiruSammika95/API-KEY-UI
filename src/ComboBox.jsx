import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({options,placeholder}) {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 400 }}
      options={options}
      autoHighlight
      getOptionLabel={(option) => option}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            {option}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={placeholder}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}


  

