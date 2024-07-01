//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU9hYmJZU0lmL1ByMzFaUHhRYWRhUElmZ0MrSHZndW9HZWxJenNUTmZHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXMrMmtGQjB4Qzl4ZWd1UmYvdFJQNmtCSTNKc0I1ZlJQeVh2YnkyZWR6MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSjZreWJtTXJuc1VWdUhyMmNlNWNpbDBZc2V4QXZTWGVFcmJjWnpOdkY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuU3owRXVwU1lXRHkxVEFKUlBMZ3M0RTM0YWJER2NQeC9rNmY3S1pBQ0FrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNLQ2IvWXN6Vk5HbjY3dzk5eUY3Z1RUeDYvRlZ1QWhPL2FUS1FLTVBEV1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4yTTVhZklkTVVZTXVaNS9BV2xkdzZ2dmFqL3lIUzRUdFVaa2N4UzN2eVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0RyS2pLMjdOaVErOWdUTUpFeXBpY2ZmK1dvdFI4ZWJDTzNaaFdYTVMxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienpoczJWV1l1c2lLOC9qeTRldnBETGYydnRtL1VRbWFQUWtKT1pHekUyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkF6WThnaUNaakNzZ0dmMUx1VFJYd3FtWENPK0VQbmxHYTYxOU9mOStLZWxhM2JFdG4yVG43cHJiaEtmQXEvaGNYTGEybCtPeWZ6M1RReXRjRVNSSGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzIsImFkdlNlY3JldEtleSI6ImI4Q255UlRMTFNucUl3b2NyekVCTXZrVlFnRDhMWWNuQmg3T21nc1NmUTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTkzNzMwODI0MDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzAxQzM3MkVDMDczMUY4MjJGMkE5M0JCOTcxRjUxMTEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTg2NzExM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoia1RDQkJGcDVUR3lWMHB1SmJoMjA0dyIsInBob25lSWQiOiIxYTQyNjM4My0xNDg4LTRmNzQtODk1MS00MzRlY2NjMWVmYjUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2VTZ3BZRExWdnZaMzF1bVRGMlA0b2E4YlI4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImthYUZ4U2FTVGJDZ3I2VlRyeENwQVFVQ0dvOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxUjMxNzJaViIsIm1lIjp7ImlkIjoiMTkzNzMwODI0MDY6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4SC4o2j4oOd8J2QhvCdmq/wnZCD8J2En+Kcrs2i4omb4oOd8J2as/CdmqvwnZCD8J2aq/CdmqrwnZqr8J2En+KcruKDnfCfkZEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05lTzRmSUhFTnl0akxRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlE1alFPU05DSkM3UWQyaG12aE5IdTRLV3REUDFjWmhrbkFyQmRnbWtrMkU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkIrUkR5d2kxWmxtL2dHcHB0b0RmRWJWb0RZMWNMakJqeTd5NFdsalYwSFgvSEdreHZPZXc1ME8vQ2VhTWFycE84R0FkWE0wWlRiZWI5UTlYRFY4OUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGS2tENzhMdEttc2d2V081ejRxN3lwc1VhalRBOXFrWS9DUjdLSkNrMUFXNWovOVE2bG9HQWIyMjU0T29aL1pkckpnY1lTMHB1Tll6SDV4N0pzemdqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE5MzczMDgyNDA2OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVU9ZMERralFpUXUwSGRvWnI0VFI3dUNsclF6OVhHWVpKd0t3WFlKcEpOaCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTg2NzExMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLeksifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐺𝛩𝐷 𝛭𝛥𝐷𝛥𝑅𝛥",
  ownername: process.env.OWNER_NAME || "𝐺𝛩𝐷 𝛭𝛥𝐷𝛥𝑅𝛥",
  errorChat: process.env.ERROR_CHAT || "+19373082406",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
