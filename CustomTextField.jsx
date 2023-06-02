import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './CustomTextField.css'; // Import the CSS file for custom styles

const CustomTextField = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextField
      label="Custom Text Field"
      variant="outlined"
      className={`custom-textfield ${isFocused ? 'focused' : ''}`} // Add a custom class name for the TextField component
      onFocus={handleFocus} // Add onFocus event handler
      onBlur={handleBlur} // Add onBlur event handler
    />
  );
};

export default CustomTextField;
