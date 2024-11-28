import React, { useEffect, useState } from "react";
import Signature from "../assets/ARsignature.c7e73db04e648024d2c5.png";
import Spinner from "../assets/Rolling@1x-1.0s-200px-200px.gif";

import StudentPage from "./StudentPage";

const Right = () => {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="flex flex-col items-center text-center h-full w-1/2 py-12">
      <div className="text-center flex flex-col items-center">
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
        <h6 className="text-sm text-center mt-2 mb-6">
          SCAN THE QR CODE ON YOUR DOCUMENT TO VERIFY.
        </h6>
      </div>

      {loading ? ( // Conditional rendering based on loading state
        <div className="py-5 flex flex-col items-center gap-y-3">
          <img width={30} src={Spinner} />
          <p className="uppercase text-xs text-[#00aeef]">
            Please Wait as we fetch student details...
          </p>
        </div>
      ) : (
        <>
          <div className="text-xs font-bold text-center text-[#bd3128] p-2 border border-gray-300 bg-white w-11/12 mb-6">
            SEARCH TERM: 2400801346
          </div>
          <StudentPage />
        </>
      )}
    </div>
  );
};

export default Right;
