import React from "react";
import IconwithLable from "../../components/button/iconwithLable";
import {
  AiFillAlipaySquare,
  AiOutlineSave,
  AiOutlineSetting,
} from "react-icons/ai";
import "./index.scss";
import TableContent from "../tableContent";
import { useSelector } from "react-redux";
import { BsChatRightDots, BsClipboardData } from "react-icons/bs";

const TopSection = () => {
  const data = useSelector((state) => state.items);
  console.log("items", data);
  return (
    <>
      <div className="top-section">
        <div style={{ display: "flex" }}>
          <IconwithLable
            label="Data"
            white
            Icon={<AiOutlineSetting color="#F0EDFA" />}
          />
          <IconwithLable
            label="Summary"
            Icon={<BsClipboardData />}
            isActive={true}
          />
          <IconwithLable
            label="Logs"
            Icon={<BsChatRightDots />}
            isActive={true}
          />
        </div>
        <div>
          <IconwithLable
            label="Download"
            Icon={<AiOutlineSave />}
            isActive={true}
          />
        </div>
      </div>
      <TableContent data={data} />
    </>
  );
};

export default TopSection;
