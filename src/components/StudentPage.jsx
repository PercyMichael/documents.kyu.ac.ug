import React from "react";
import "../App.css";
import Signature from "../assets/ARsignature.c7e73db04e648024d2c5.png";
import Logo from "../assets/institution_logo-ADF-1727950070363.png";
import Student from "../assets/1732182241097_MON_0628.jpg";
import { studentDetail } from "../data/Students";

const StudentPage = () => {
  return (
    <>
      <div
        className="text-sm p-3 border-2 border-[#00aeef] bg-white w-11/12"
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: "65%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: window.innerWidth < 768 ? "center 44%" : "center",
        }}
      >
        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.835)" }}>
          <header className="flex justify-start items-center md:items-start gap-x-6 pb-2">
            <div className="h-full">
              <img
                alt="Logo"
                className="ant-image-img mx-auto w-10 md:w-full bg-white css-g1befh"
                style={{ maxWidth: "80px" }}
                src={Logo}
              />
            </div>
            <div className="uppercase font-bold text-left">
              <h5 className="text-uppercase text-xl font-bold text-[#212529]">
                Kyambogo University
              </h5>
              <div className="font-bold text-xs text-[#212529]">
                Office of the Academic Registrar
              </div>
              <div className="text-xs text-[#212529]">
                STUDENT EXAMINATION PERMIT
              </div>
              <div className="text-gray-500 text-xs">
                VERIFIED ON: Thursday, November 28th 2024, 11:17:51 am
              </div>
            </div>
          </header>
          <hr class="mb-4 border-[#C5EBFB] border-4" />
          <div class="bg-[#00aeef] p-1 text-xs mb-4 text-center font-bold text-uppercase text-white">
            EXAMINATION PERMIT
          </div>

          <div className="flex my-2 w-full gap-x-2">
            <div className="border border-[#00aeef] border-dashed w-1/5">
              <img
                alt="avatar"
                className="ant-image-img text-center mx-auto bg-white css-g1befh"
                src={Student}
                height="100"
                width={100}
                style={{ maxHeight: "100px" }}
              />
            </div>
            <div className="border border-[#00aeef] border-dashed h-full w-5/6 overflow-auto">
              <table class="m-0 text-xs striped-table text-left">
                <tbody>
                  <tr>
                    <td width="130" class="font-bold border">
                      FULL NAME:
                    </td>
                    <td colspan="2" class="border">
                      {studentDetail.name}
                    </td>
                    <td colspan="1" class="border">
                      <strong>FEES BAL DUE: </strong>0 UGX
                    </td>
                  </tr>
                  <tr>
                    <td class="font-bold border">SEX:</td>
                    <td colspan="3" class="border">
                      MALE
                    </td>
                  </tr>
                  <tr>
                    <td class="font-bold border">STUDENT NO.:</td>
                    <td colspan="3" class="border">
                      {studentDetail.studentNo}
                    </td>
                  </tr>
                  <tr>
                    <td class="font-bold border">REGISTRATION NO.:</td>
                    <td colspan="3" class="border">
                      {studentDetail.registrationNo}
                    </td>
                  </tr>
                  <tr>
                    <td class="font-bold border">PROGRAMME:</td>
                    <td colspan="3" class="border">
                      BACHELOR OF SCIENCE IN ACCOUNTING AND FINANCE-BAF
                    </td>
                  </tr>
                  <tr class="my-1">
                    <td class="font-bold border">STUDY YEAR:</td>
                    <td class="border">YEAR 2</td>
                    <td class="font-bold border">CAMPUS:</td>
                    <td class="border">MAIN CAMPUS</td>
                  </tr>
                  <tr class="my-1">
                    <td class="font-bold border">SEMESTER:</td>
                    <td class="border">SEMESTER I</td>
                    <td
                      class="font-bold border"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      ACADEMIC YEAR:
                    </td>
                    <td class="border">2024/2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* courses offered  */}
          <div className="text-uppercase text-[#00aeef] text-xs font-bold mb-2 py-1 px-2 text-center bg-white bg-opacity-90">
            COURSES/MODULES REGISTERED
          </div>
          <div className="border border-[#00aeef] border-dashed my-2 overflow-auto">
            <table className="table-auto text-xs m-0 table-striped bg-white striped-table">
              <thead className="border-bottom font-black text-xs">
                <tr>
                  <th
                    className="border border-gray-300"
                    style={{ padding: "5px 10px" }}
                  >
                    #
                  </th>
                  <th className="border border-gray-300 text-left">
                    COURSE NAME
                  </th>
                  <th className="text-center border border-gray-300">
                    CREDIT UNITS
                  </th>
                  <th className="text-start border border-gray-300">
                    CATEGORY
                  </th>
                  <th className="text-start border border-gray-300">STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300">1</td>
                  <td className="border border-gray-300 text-left">
                    <strong className="me-1">MAF 2101:</strong>INTERMEDIATE
                    ACCOUNTING
                  </td>
                  <td
                    className="text-center border border-gray-300"
                    width="19%"
                  >
                    3
                  </td>
                  <td className="border border-gray-300 text-left">CORE</td>
                  <td className="border border-gray-300 text-left">
                    NORMAL PAPER
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300">2</td>
                  <td className="border border-gray-300 text-left">
                    <strong className="me-1">MBE 2101:</strong>BUSINESS
                    COMPUTING
                  </td>
                  <td
                    className="text-center border border-gray-300"
                    width="19%"
                  >
                    3
                  </td>
                  <td className="border border-gray-300 text-left">CORE</td>
                  <td className="border border-gray-300 text-left">
                    NORMAL PAPER
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300">3</td>
                  <td className="border border-gray-300 text-left">
                    <strong className="me-1">MBE 2102:</strong>ENTREPRENEURSHIP
                    AND INNOVATION
                  </td>
                  <td
                    className="text-center border border-gray-300"
                    width="19%"
                  >
                    3
                  </td>
                  <td className="border border-gray-300 text-left">CORE</td>
                  <td className="border border-gray-300 text-left">
                    NORMAL PAPER
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300">4</td>
                  <td className="border border-gray-300 text-left">
                    <strong className="me-1">MBE 2103:</strong>COMPANY LAW
                  </td>
                  <td
                    className="text-center border border-gray-300"
                    width="19%"
                  >
                    3
                  </td>
                  <td className="border border-gray-300 text-left">CORE</td>
                  <td className="border border-gray-300 text-left">
                    NORMAL PAPER
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300">5</td>
                  <td className="border border-gray-300 text-left">
                    <strong className="me-1">MMS 2101:</strong>PRODUCTION AND
                    OPERATIONS MANAGEMENT
                  </td>
                  <td
                    className="text-center border border-gray-300"
                    width="19%"
                  >
                    3
                  </td>
                  <td className="border border-gray-300 text-left">CORE</td>
                  <td className="border border-gray-300 text-left">
                    NORMAL PAPER
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300">6</td>
                  <td className="border border-gray-300 text-left">
                    <strong className="me-1">MMS 2102:</strong>ORGANIZATIONAL
                    BEHAVIOUR
                  </td>
                  <td
                    className="text-center border border-gray-300"
                    width="19%"
                  >
                    3
                  </td>
                  <td className="border border-gray-300 text-left">CORE</td>
                  <td className="border border-gray-300 text-left">
                    NORMAL PAPER
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* footer  */}
          <footer className="text-left text-xs">
            <div className=" underline mb-2">
              <strong>NOTES:</strong>
            </div>
            <ol style={{ listStyleType: "decimal" }} className="italic px-8">
              <li className="text-bold">
                Total Credits Registered for <strong>2024/2025</strong>{" "}
                <strong>SEMESTER I</strong> is <strong>20</strong>.
              </li>
              <li>
                This card is confidential and must be produced to the
                invigilator when required at each examination.
              </li>
              <li>
                Your <strong>STUDENT NUMBER</strong> and not your name must
                appear on every answer book or supplementary sheet.
              </li>
              <li>
                Unauthorized materials/notes should <strong>NOT</strong> be
                carried into the examination room.
              </li>
              <li>
                Mobile phones, Ipads and Tablets should <strong>NOT</strong> be
                brought close to the examination room.
              </li>
              <li>
                Students shall abide by the University Examination Regulations.
              </li>
            </ol>
          </footer>
          {/* signature  */}
          <div className="flex flex-col items-end gap-y-0 pt-4">
            <img src={Signature} alt="Signature" width="80px" height="30px" />
            <h5 className="font-bold text-sm mt-1">ACADEMIC REGISTRAR</h5>
          </div>
        </div>
      </div>
      {/* end button */}
    </>
  );
};

export default StudentPage;
