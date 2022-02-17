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
    params: { count: "20", setLang: "EN", freshness: "Day", textFormat: "Raw", offset: "0", safeSearch: "Off" },
    headers: headersNews(),
  };
  if ("q" in req.query) {
    options.params.q = req.query.q;
  }
  if ("setLang" in req.query) {
    options.params.setLang = req.query.setLang;
  }
  if ("count" in req.query) {
    options.params.count = req.query.count;
  }
  if ("offset" in req.query) {
    options.params.offset = req.query.offset;
  }
  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
