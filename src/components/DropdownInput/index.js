import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropdownInput = ({ options, placeholder, selectedOption, onSelect }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setShowDropdown(false);
  };

  return (
    <div
      className="dropdown-input-container"
      style={{
        position: "relative",
        width: "90px",
      }}
    >
      <input
        type="text"
        value={selectedOption}
        onClick={() => setShowDropdown(!showDropdown)}
        readOnly
        placeholder={placeholder || "Select an option"}
        style={{
          width: "100%", // Full width of the container
          padding: "2px 3px 1px 1px", // Add padding on the right for the icon
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
          boxSizing: "border-box", // Ensure padding does not affect the width
        }}
      />
      <FaChevronDown
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none", // To ensure the icon does not interfere with input clicks
          color: "#aaa", // Optional: Change color of the icon
        }}
      />
      {showDropdown && (
        <div
          className="dropdown-list"
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            position: "absolute",
            top: "100%",
            left: "0",
            right: "0",
            backgroundColor: "#fff",
            zIndex: 1000,
            maxHeight: "150px",
            overflowY: "auto",
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              style={{
                padding: "10px",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#fff")
              }
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownInput;
