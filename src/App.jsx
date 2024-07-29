import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      Tailwind
      <div className="fixed flex-wrap justify-center">MERN</div>
    </div>
  );
}
export default App;
