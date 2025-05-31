const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID:MOVIE-VISPER=nwQynTRY#J5nW8mzWGe95FLrcZSZj23Kpv54hH_ATgORur1HtkhE process.env.SESSION_ID === undefined ? 'PUT SESSION ID HERE' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,    
SESSION_NAME:kaveen process.env.SESSION_NAME ===kaveen undefined ? 'vispermd' : process.env.SESSION_NAME, 

};

