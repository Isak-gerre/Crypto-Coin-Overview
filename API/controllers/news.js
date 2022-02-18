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
    url: "https://free-news.p.rapidapi.com/v1/search",
    params: { q: "Crypto", lang: "en" },
    headers: headersNews(),
  };
  if ("q" in req.query) {
    options.params.q = req.query.q;
  }
  if ("page" in req.query) {
    options.params.page = req.query.page;
  }
  if ("page_size" in req.query) {
    options.params.page_size = req.query.page_size;
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
