import React, { useState } from "react";
import "./index.scss";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import DropdownInput from "../../components/DropdownInput";
import { BsClipboard, BsCloudPlus } from "react-icons/bs";

const TableContent = ({ data }) => {
  console.log("data", data);
  const [selectedOption, setSelectedOption] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3"]; // Your dropdown options

  // Function to handle selection and close dropdown
  const handleSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <div>
      <div className="table-content">
        <div style={{ display: "flex", gap: "5px" }}>
          <div className="tbl">
            <div>
              <div className="tb2">
                <div>
                  <BsClipboard size={13} color="#A88ADC" />
                </div>
                <div style={{ color: "#A88ADC" }}>PROJECT NAME</div>
              </div>
            </div>
            <div>
              <p style={{ textTransform: "capitalize" }}>
                {data?.[0]?.project_name}
              </p>
            </div>
          </div>
          <div className="tbl">
            <div>
              <div className="tb2">
                <div>
                  <BsCloudPlus size={13} color="#A88ADC" />
                </div>
                <div style={{ color: "#A88ADC" }}>OUTPUT DATASET NAME</div>
              </div>
            </div>
            <div>
              <p style={{ textTransform: "capitalize" }}>
                {data?.[0]?.output_name}
              </p>
            </div>
          </div>
          <div className="tbl">
            <div>
              <div>
                <div className="tb2">
                  <div style={{ color: "#A88ADC" }}>LAST RUN</div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ textTransform: "capitalize" }}>
                {data?.[0]?.last_run}
              </p>
            </div>
          </div>
        </div>
        <div>Rows: {data?.[0]?.row_count}</div>
      </div>
      <div className="table-wrapper" style={{ padding: "16px" }}>
        <Table bordered>
          <thead>
            <tr>
              {data?.[0]?.table_headers.map((column, index) => (
                <>
                  <th
                    key={index}
                    style={{
                      backgroundColor: "#F4F6FC",
                      color: "#1A357A",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "50px",
                        }}
                      >
                        {column?.name.slice(0, 10)}
                        <div>
                          <AiFillDelete />
                        </div>
                      </div>
                    </div>
                  </th>
                </>
              ))}
            </tr>
            <tr>
              {data?.[0]?.table_headers.map((column, index) => (
                <th
                  key={`filter-${index}`}
                  style={{
                    backgroundColor: "#F4F6FC",
                    color: "#1A357A",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <DropdownInput
                      options={options}
                      placeholder={column?.type}
                      selectedOption={selectedOption}
                      onSelect={handleSelect}
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.[0]?.table_data.map((row, rowIndex) => (
              <>
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <>
                      <td key={cellIndex}>{cell}</td>
                    </>
                  ))}
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableContent;
