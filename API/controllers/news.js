import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { MongoClient } = require("mongodb");
import { credentials } from "../database_credentials.js";
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
  const client = await main();
  console.log(req.query);

  await client.close();
};
