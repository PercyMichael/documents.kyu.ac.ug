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
        backgroundSize: window.innerWidth < 768 ? "28%" : "9%",
        backgroundPosition:
          window.innerWidth < 768 ? "center 18%" : "center 35%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto">
        <main className="flex flex-col md:flex-row min-h-screen max-w-7xl mx-auto">
          <Left />
          <Right />
        </main>
      </div>
      <footer class="mt-auto text-center bg-[#FD7213] text-white w-100 py-4 text-sm font-bold">
        <div class="text-xs">© 2024 ACMIS DOCUMENT VERIFICATION</div>
      </footer>
    </div>
  );
}

export default App;
