import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const globalForMongo = globalThis;
const client =
  globalForMongo.mongoClient ?? new MongoClient(process.env.AUTH_DB_URI);

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClient = client;
}

const db = client.db(process.env.AUTH_DB_NAME || "better-auth-db");

export const auth = betterAuth({
  //...other options
  emailAndPassword: { 
    enabled: true, 
    // requireEmailVerification: true,
  }, 

  // Do not pass the MongoClient here. The adapter can operate without
  // transactions, avoiding transaction-lifecycle errors during signup.
  database: mongodbAdapter(db),
  //...
});

/**
 * 1. Better auth: install
 * 2. env vars: BETTER_AUTH_SECRET
                BETTER_AUTH_UR
 */


