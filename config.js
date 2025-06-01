const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

MOVIE-VISPER=nwQynTRY#J5nW8mzWGe95FLrcZSZj23Kpv54hH_ATgORur1HtkhE: process.env.MOVIE-VISPER=nwQynTRY#J5nW8mzWGe95FLrcZSZj23Kpv54hH_ATgORur1HtkhE === undefined ? 'MOVIE-VISPER=nwQynTRY#J5nW8mzWGe95FLrcZSZj23Kpv54hH_ATgORur1HtkhE' : process.env.MOVIE-VISPER=nwQynTRY#J5nW8mzWGe95FLrcZSZj23Kpv54hH_ATgORur1HtkhE, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,    
SESSION_NAME: process.env.vispermd === undefined ? 'vispermd' : process.env.vispermd, 

};

