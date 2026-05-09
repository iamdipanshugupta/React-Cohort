import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  console.log(import.meta.env.VITE_API_URL);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/all-chai`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => console.log(data))
      .catch((error) => console.error("error fetching data", error));
  }, []);

  return (
    <>
      <h1>Welcome to RAW react</h1>
      <p>Data From Api:{data ? JSON.stringify(data) : "Loading..."}</p>
    </>
  );
}

export default App;
