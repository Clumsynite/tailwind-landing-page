import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="App">
      <Outlet />
    </div>
  );
}

export default App;
