import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsFeed from "./components/newsFeed";
import CoinFeed from "./components/coinFeed";


function App() {

  return <div>
    {/* <NewsFeed/> */}
    <CoinFeed/>
  </div>;
}

export default App;
