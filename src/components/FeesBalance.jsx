import { Button, Input, Select } from "antd";
import React from "react";
import Student from "../assets/2400801346.jpeg";
import { CloseSquareFilled } from "@ant-design/icons";

const selectAfter = (
  <Select defaultValue="REG. DETAILS">
    <Option value="REG. DETAILS">REG. DETAILS</Option>
    <Option value="EXAM PERMIT">EXAM PERMIT</Option>
    <Option value="VIRTUAL ID">VIRTUAL ID</Option>
  </Select>
);

const FeesBalance = () => {
  return (
    <div className="w-full md:w-1/2 py-12 px-6">
      <div className="text-center flex flex-col items-centers">
        <span className="text-[#00aeef]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="text-primary"
            height="100"
            width="100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M468 128H160c-17.7 0-32 14.3-32 32v308c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8zm-56 284H192V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210H136c-4.4 0-8 3.6-8 8v308c0 17.7 14.3 32 32 32h308c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zm-56 284H192V612h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm590-630H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V160c0-17.7-14.3-32-32-32zm-32 284H612V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210h-48c-4.4 0-8 3.6-8 8v134h-78V556c0-4.4-3.6-8-8-8H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h78v102c0 4.4 3.6 8 8 8h190c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zM746 832h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm142 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </span>
        <h6 className="text-sm text-center mt-2 mb-6 px-9">
          SCAN THE QR CODE ON YOUR DOCUMENT TO VERIFY.
        </h6>
      </div>
      <p className="font-bold text-sm">
        ENTER STUDENT NUMBER OR REG. NO. & DOCUMENT TYPE
      </p>
      <Input
        addonAfter={selectAfter}
        defaultValue="2400801346"
        className="py-2"
      />
      <Button
        size="small"
        block
        style={{ backgroundColor: "#00aeef" }}
        className="text-white border-none font-bold uppercase"
      >
        Reload
      </Button>

      <div className="flex my-4 w-full gap-x-2">
        <div className="h-full w-5/6 overflow-auto">
          <table className="text-xs striped-table">
            <tbody>
              <tr>
                <td rowspan="7" className="text-center">
                  <div
                    className="ant-image css-g1befh"
                    style={{ maxHeight: "100px" }}
                  >
                    <img
                      alt="avatar"
                      className="ant-image-img text-centertext-center mt-4 css-g1befh"
                      src="https://documents.kyu.ac.ug/photos/student-photos/2400801346.jpeg"
                      width="100"
                      height="100"
                      style={{ maxHeight: "120px" }}
                    />
                  </div>
                </td>
                <td>STUDENT NAMES</td>
                <td className="font-bold">MWESIGWA Jennar</td>
              </tr>
              <tr>
                <td>PROGRAMME</td>
                <td className="font-bold">
                  BACHELOR OF SCIENCE IN ACCOUNTING AND FINANCE - (BAF)
                </td>
              </tr>
              <tr>
                <td>ACADEMIC STATUS</td>
                <td className="font-bold">NORMAL PROGRESS</td>
              </tr>
              <tr>
                <td>CAMPUS</td>
                <td className="font-bold">MAIN CAMPUS</td>
              </tr>
              <tr>
                <td>CURR. STUDY YEAR</td>
                <td className="font-bold">YEAR 2</td>
              </tr>
              <tr>
                <td>STUDY TIME</td>
                <td className="font-bold">EVENING</td>
              </tr>
              <tr className="font-bold">
                <td className="text-[#bd3128]">FEES BALANCE</td>
                <td className="text-[#bd3128]">0 UGX</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <Button
          icon={<CloseSquareFilled />}
          size="small"
          style={{ backgroundColor: "#FF4F50" }}
          className="text-white border-none font-bold uppercase"
        >
          Reload
        </Button>
      </div>
    </div>
  );
};

export default FeesBalance;
