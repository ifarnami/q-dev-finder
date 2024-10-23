"use client";

import { useState } from "react";
import { InputAdornment, TextField, Button } from "@mui/material";
import { SearchNormal1 } from "iconsax-react";
import SearchContainer from "@/components/containers/SearchContainer";
import Link from "next/link";

const SearchBar = () => {
  const [username, setUsername] = useState<string>("");

  return (
    <SearchContainer>
      <TextField
        variant="standard"
        id="search"
        placeholder="Search for username"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchNormal1 color="#0077FF" />
              </InputAdornment>
            ),
          },
        }}
      />
      <Link href={`/profile/${username}`}>
        <Button variant="contained">Search</Button>
      </Link>
    </SearchContainer>
  );
};

export default SearchBar;
