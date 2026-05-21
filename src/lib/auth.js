import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins"
const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('tutoria');

export const auth = betterAuth({
  plugins: [
        jwt(), 
  ],
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: { 
    enabled: true, 
  }, 
  session: {
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60,
            strategy: "jwt" 
        }
  },
  baseURL: process.env.BETTER_AUTH_URL, 
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
});