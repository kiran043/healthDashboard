import React, { useState } from "react";
import "./index.scss";
import {
  AiOutlineClose,
  AiOutlineDownload,
  AiOutlineSave,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import TopSection from "./topSection";
import { Accordion } from "react-bootstrap";
import { BsDash, BsPlusLg } from "react-icons/bs";

const Dashboard = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const handle = () => {
    setShow(!show);
  };
  const handle1 = () => {
    setShow1(!show1);
  };
  return (
    <div className="main-dashboard">
      <div style={{ width: "80%" }}>
        <TopSection />
      </div>
      <div className="dashboard-content">
        <div className="db1" style={{ borderBottom: "0.5px Solid black" }}>
          <div>Workflow</div>
          <div className="icon-section">
            <AiOutlineClose color="red" />
            <AiOutlineDownload color="red" />
            <AiOutlineSave color="red" />
            <AiOutlineShopping color="red" />
            <AiOutlineUser color="red" />
          </div>
        </div>
        {/* <hr /> */}
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "5px",
            paddingTop: "15px",
          }}
        >
          <div
            onClick={handle}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            {show ? <BsDash /> : <BsPlusLg />}
            {show ? (
              <div
                style={{
                  height: "50px",
                  borderLeft: "2px dashed #c1b5de",
                  margin: "0 5px",
                }}
              ></div>
            ) : null}
          </div>
          <div style={{ flex: 1 }}>
            <div
              className="db2"
              style={{ borderBottom: show ? "none" : "1px solid #c1b5de" }}
            >
              DATASET SELECTION
            </div>
            <div className="db3">
              {show ? (
                <div
                  style={{
                    padding: "10px",
                    border: "2px solid #c1b5de",
                    borderRadius: "5px",
                    borderTop: "none",
                  }}
                >
                  Name: Brick Data
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "5px",
          }}
        >
          <div>
            <BsPlusLg />
          </div>
          <div style={{ flex: 1 }}>
            <div className="db4">NEW</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "5px",
            paddingTop: "10px",
          }}
        >
          <div>
            <BsPlusLg />
          </div>
          <div style={{ flex: 1 }}>
            <div className="db4">AGGREGATE</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "5px",
            paddingTop: "10px",
          }}
        >
          <div>
            <BsPlusLg />
          </div>
          <div style={{ flex: 1 }}>
            <div className="db4">CLEAN</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "5px",
            paddingTop: "10px",
          }}
        >
          <div>
            <BsPlusLg />
          </div>
          <div style={{ flex: 1 }}>
            <div className="db4">DEDUPE</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "5px",
            marginTop: "10px",
          }}
        >
          <div
            onClick={handle1}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              marginTop: "4px",
            }}
          >
            {show1 ? <BsDash /> : <BsPlusLg />}
            {show1 ? (
              <div
                style={{
                  height: "110px",
                  borderLeft: "2px dashed #c1b5de",
                  margin: "0 5px",
                }}
              ></div>
            ) : null}
          </div>
          <div style={{ flex: 1 }}>
            <div
              className="db4"
              style={{ borderBottom: show1 ? "none" : "1px solid #c1b5de" }}
            >
              JOIN
            </div>
            <div className="db3">
              {show1 ? (
                <div style={{ display: "flex" }}>
                  <div
                    className="db4"
                    style={{
                      borderTop: "none",
                      padding: "5px",
                      width: "100%",
                      backgroundColor: "#F4F6FC",
                    }}
                  >
                    <div>type:inner</div>
                    <div>extras:inner</div>
                    <div>left_columns:inner</div>
                    <div>right_columns:inner</div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
