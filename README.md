# Multi Token Onliner

# made by S7 THENDER 

support 
https://discord.gg/5guGU6tfTU

A simple multi-token Discord onliner built with Node.js using "discord.js-selfbot-v13".

Features

- Multi token support
- Automatic token loading from ".env"
- Sequential login system
- Error handling
- Clean console logs
- Easy deployment on VPS / Render / Railway

---

Installation

Clone the repository:

git clone https://github.com/thender800/multi-token-onliner.git
cd multi-token-onliner

Install dependencies:

npm install

---

Setup

Create a ".env" file in the root folder.

Example:

TOKEN1=your_token_here
TOKEN2=your_token_here
TOKEN3=your_token_here

You can add unlimited tokens.

---

Start The Bot

Run:

npm start

or

node onliner.js

---

Requirements

- Node.js 18+
- npm

---

Dependencies

- dotenv
- discord.js-selfbot-v13
- debug
---

Notes

- Tokens are loaded automatically from environment variables.
- Tokens login one by one with delay to avoid rate limits.
- Keep your ".env" private.

---

License

MIT License
