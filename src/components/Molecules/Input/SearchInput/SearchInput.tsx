import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  onChange: (searchText: string) => void;
}

export default function SearchInput(props: Props) {
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
          id='searchInput'
          value={searchText}
          placeholder='Search by Title or Author'
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
