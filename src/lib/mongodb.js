import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URL) {
  throw new Error("Missing MONGODB_URL environment variable");
}

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Reuse the client across Fast Refresh reloads in dev so we don't open a
  // new MongoDB connection on every file save.
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(
      process.env.MONGODB_URL,
      options,
    ).connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = new MongoClient(process.env.MONGODB_URL, options).connect();
}

export async function getDb() {
  const client = await clientPromise;
  return client.db("brave-education-uk");
}
