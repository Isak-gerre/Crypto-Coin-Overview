import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsComponent from "./components/newsComponent";


function App() {
  const [data, setData] = useState({ articles: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/news?q=bitcoin");
      console.log(result.data);

      setData(result.data);
    };

    fetchData();
  }, []);

  return <div>
    {
      data.articles.map((news) => {
        return <NewsComponent news={news}></NewsComponent>
      })
    }
  </div>;
}

export default App;
