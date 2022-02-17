import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { MongoClient } = require("mongodb");
import { credentials, headers } from "../database_credentials.js";
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

export const getCoin = async (req, res) => {
  var options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      tiers: "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "100",
      offset: "1",
    },
    headers: headers(),
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.coins);
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  console.log(req.query);
};
