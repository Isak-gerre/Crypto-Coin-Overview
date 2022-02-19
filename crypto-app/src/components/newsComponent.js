import React from "react";

function newsComponent({ news, index }) {
  console.log(news);
  let title = news.title.split(" : ");
  let date = news.published_date.split(" ");
  let topic = news.topic.charAt(0).toUpperCase() + news.topic.slice(1);
  return <div className="news_component" key={index}>
    <p className="news_rights"><a href={news.clean_url} className="news_link" target="_blank" rel="noreferrer">{news.rights}</a></p>
    <img src={news.media} alt="" className="news_image" />
    <p className="news_title"><a href={news.link} className="news_link" target="_blank" rel="noreferrer">{title[0]}</a></p>
    <div className="news_info_container">
      <p className="news_topic">{topic}</p>
      <p className="news_date">{ date[0] }</p>
    </div>
    {/* <p className="news_summary">{news.summary}</p> */}
  </div>;
}

export default newsComponent;
