import { useState } from "react";
import viteLogo from "/vite.svg";
import Left from "./components/Left";
import Right from "./components/Right";
import Vector from "./assets/undraw_hiring_re_yk5n.55733c22e8e8959ad7cb.svg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="bg-[#F3F3F4]"
      style={{
        backgroundImage: `url(${Vector})`,
        backgroundSize: "9%",
        backgroundPosition: "center 35%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto">
        {/* <img
          alt="Logo"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1"
          style={{ maxWidth: "120px" }}
          src={Vector}
        /> */}
        <main className="flex flex-col md:flex-row min-h-screen max-w-7xl mx-auto">
          <Left />
          {/* <Right className="relative z-10" /> */}
        </main>
      </div>
      <footer class="mt-auto text-center bg-[#FD7213] text-white w-100 py-4 text-sm font-bold">
        <div class="text-xs">© 2024 ACMIS DOCUMENT VERIFICATION</div>
      </footer>
    </div>
  );
}

export default App;
