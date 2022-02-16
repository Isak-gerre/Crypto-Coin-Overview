import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ cars: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000");
      console.log(result.data);

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.cars.map((item) => (
        <p>{item.model}</p>
      ))}
    </div>
  );
}

export default App;
