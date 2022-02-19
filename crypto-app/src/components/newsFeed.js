import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsComponent from "./newsComponent";


const NewsFeed = () => {
  const [data, setData] = useState({ articles: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/news?q=dogecoin");
      console.log(result.data);
      //TODO - Sortera efter dag
      setData(result.data);
    };

    fetchData();
  }, []);

  return <div>
    <div className="news_container">
    {
      data.articles.map((news, index) => {
        return <NewsComponent key={index} news={news}></NewsComponent>
      })
    }
    </div>
  </div>;
}

export default NewsFeed;
