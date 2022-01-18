import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
  onChange: (searchText: string) => void;
}

export default function SearchInput(props: SearchInputProps) {
  const [searchText, setSearchText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <Box sx={{ m: 1 }}>
      <FormControl
        fullWidth
        sx={{ m: 1, minWidth: "400px", maxWidth: "658px" }}
        variant='standard'
      >
        <Input
          data-testid='searchBar'
          placeholder='Search by title or author'
          value={searchText}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
