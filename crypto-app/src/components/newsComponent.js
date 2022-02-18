import React from "react";

function newsComponent({ news }) {
  console.log(news);
  let title = news.title.split(" : ");
  let date = news.published_date.split(" ");
  return <div>{title[0]}</div>;
}

export default newsComponent;
