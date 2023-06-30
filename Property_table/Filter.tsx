import React, { useState, useRef } from "react";
import { Button, Menu, MenuItem, Input, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);
  const [dropdownOptions] = useState(["Option 1", "Option 2", "Option 3"]);

  const handleMenuToggle = (event) => {
    setIsMenuOpen((prevOpen) => !prevOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    setAnchorEl(null);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setAutocompleteSuggestions(getFilteredSuggestions(value));
  };

  const handleAutocompleteSelect = (value) => {
    setInputValue(value);
    setAutocompleteSuggestions([]);
  };

  const handleDropdownSelect = (option) => {
    setSelectedOption(option);
  };

  const getFilteredSuggestions = (value) => {
    const allSuggestions = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    return allSuggestions.filter((suggestion) => suggestion.toLowerCase().includes(value.toLowerCase()));
  };

  return (
    <div style={{ position: "relative" }}>
      <Button onClick={handleMenuToggle}>
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search"
          style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
        />
        {autocompleteSuggestions.map((suggestion) => (
          <MenuItem key={suggestion} onClick={() => handleAutocompleteSelect(suggestion)}>
            <ListItemText primary={suggestion} />
          </MenuItem>
        ))}
        <Button variant="contained" onClick={handleMenuToggle} style={{ width: "100%", padding: "5px", marginBottom: "10px" }}>
          {selectedOption || "Select an option"}
        </Button>
        {dropdownOptions.map((option) => (
          <MenuItem key={option} onClick={() => handleDropdownSelect(option)}>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
