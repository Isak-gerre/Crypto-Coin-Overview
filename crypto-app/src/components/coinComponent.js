import React from "react";

function CoinComponent({ coin, index }) {
  console.log(coin);
  let sparklineurl = "http://quickchart.io/chart?c={type:'sparkline',data:{datasets:[{backgroundColor:'rgba(255,0,0,0.2)',borderColor:'red', data:[";
  sparklineurl = sparklineurl + coin.sparkline + "]}]}}"
  return <tr className="coin_component" key={index}>
        <td className="coin_name"><img src={coin.iconUrl} alt="" className="coin_icon"/>{coin.name}</td>
        <td className="coin_price">{coin.price}</td>
        <td className="coin_change">{coin.change}%</td>
        <td className="coin_24hVolume">{coin["24hVolume"]}</td>
        <td className="coin_rank">{coin.rank}</td>
    <td className="coin_sparkline"><img src={ sparklineurl} alt="" className="coin_icon"/></td>
  </tr>;
}

export default CoinComponent;
