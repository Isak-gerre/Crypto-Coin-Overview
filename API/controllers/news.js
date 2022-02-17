import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { MongoClient } = require("mongodb");
import { credentials, headersNews } from "../database_credentials.js";
const axios = require("axios");

async function main() {
  const uri = credentials();

  const client = new MongoClient(uri);

  try {
    await client.connect();
    return client;
  } catch (error) {
    console.log(error);
  }
}

export const getNews = async (req, res) => {
  console.log(req.query);
  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: { setLang: "EN", freshness: "Day", textFormat: "Raw", safeSearch: "Off" },
    headers: headersNews(),
  };
  if ("q" in req.query) {
    options.params.q = req.query.q;
  }
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.coins);
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
