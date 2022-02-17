import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { MongoClient } = require("mongodb");
import { credentials } from "../database_credentials.js";

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

export const getUser = async (req, res) => {
  const client = await main();
  console.log(req.query);

  if ("id" in req.query) {
    console.log("id");
    const foundUser = await client
      .db("Users_Crypto")
      .collection("users")
      .find(req.query, { sort: { name: 1 } });
    res.send(foundUser);
  }
  if ("name" in req.query) {
    console.log("name");
    const foundUser = await client
      .db("Users_Crypto")
      .collection("users")
      .find(req.query, { sort: { name: 1 } });
    res.send(foundUser);
  }
  if (Object.keys(req.query).length === 0) {
    console.log("empty");
    const allUsers = await client.db("Users_Crypto").collection("users").findOne({ id: "3" });
    console.log(allUsers);
    res.send(allUsers);
  }

  await client.close();
};
export const createUser = async (req, res) => {
  const client = await main();
  console.log(req.body);
  await client.db("Users_Crypto").collection("users").insertOne(req.body);
  res.send(req.body);
  await client.close();
};
export const updateUser = async (req, res) => {
  const client = await main();
  console.log("working");
  res.send("users: get");
  await client.close();
};
