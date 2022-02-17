import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { MongoClient } = require("mongodb");
import { credentials, headersCoins } from "../database_credentials.js";
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

const allowedValues = {
  limit: {
    min: 0,
    max: 100,
  },
  timePeriod: ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"],
  orderBy: ["price", "marketCap", "24hVolume", "change", "listedAt"],
};

export const getCoin = async (req, res) => {
  let options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      tiers: "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "100",
      offset: "0",
    },
    headers: headersCoins(),
  };
  if ("name" in req.query) {
    options.params.search = req.query.name;
  }
  if (
    "limit" in req.query &&
    req.query.limit <= allowedValues.limit.max &&
    req.query.limit >= allowedValues.limit.min
  ) {
    options.params.limit = req.query.limit;
  }
  if ("offset" in req.query) {
    options.params.offset = req.query.offset;
  }
  if ("orderBy" in req.query) {
    options.params.orderBy = req.query.orderBy;
  }
  if ("orderDirection" in req.query) {
    options.params.orderDirection = req.query.orderDirection;
  }
  if ("timePeriod" in req.query && allowedValues.timePeriod.includes(req.query.timePeriod)) {
    options.params.timePeriod = req.query.timePeriod;
  }
  if ("referenceCurrencyUuid" in req.query) {
    options.params.orderBy = req.query.referenceCurrencyUuid;
  }
  if ("tags" in req.query) {
    options.params.tags = req.query.tags;
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
  console.log(req.query);
};
