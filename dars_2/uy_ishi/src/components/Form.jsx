import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Form() {
  const [categories, setCategories] = React.useState("");

  const handleChange = (event) => {
    setCategories(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="tel" placeholder="Phone" required />
        <br />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Categories"
          onChange={handleChange}
        >
          <MenuItem value={10}>Family</MenuItem>
          <MenuItem value={20}>Friend</MenuItem>
          <MenuItem value={30}>Relatives</MenuItem>
          <MenuItem value={40}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
