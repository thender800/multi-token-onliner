console.clear();

import 'dotenv/config';
import { Client } from 'discord.js-selfbot-v13';

const tokenKeys = Object.keys(process.env)
  .filter(key => key.startsWith("TOKEN"))
  .sort((a, b) => {
    const numA = parseInt(a.replace("TOKEN", "")) || 0;
    const numB = parseInt(b.replace("TOKEN", "")) || 0;
    return numA - numB;
  });

console.log(`[DEBUG] Found ${tokenKeys.length} token entries`);

if (tokenKeys.length === 0) {
  console.log("[ERROR] No tokens found in .env");
  process.exit();
}

async function startClients() {
  for (const [index, key] of tokenKeys.entries()) {
    const token = process.env[key]?.trim();

    console.log(`\n[DEBUG] Checking ${key}...`);

    if (!token) {
      console.log(`[ERROR] ${key} is empty`);
      continue;
    }

    const client = new Client({
      checkUpdate: false
    });

    client.once("ready", async () => {
      console.log(
        `[READY] [${index + 1}] ${key} -> Logged in as ${client.user.username} (${client.user.id})`
      );
    });

    client.on("error", err => {
      console.log(`[CLIENT ERROR] ${key}: ${err.message}`);
    });

    client.on("disconnect", event => {
      console.log(
        `[DISCONNECT] ${key}: ${event?.code || "Unknown"}`
      );
    });

    try {
      console.log(`[LOGIN] Attempting login for ${key}...`);
      await client.login(token);
      console.log(`[SUCCESS] ${key} fully logged in`);

      await new Promise(resolve => setTimeout(resolve, 8000));
    } catch (err) {
      console.log(`[LOGIN FAILED] ${key}: ${err.message}`);
    }
  }
}

startClients();
