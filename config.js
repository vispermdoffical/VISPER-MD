const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.VISPER-MD&i4xlgIBT#Rzf0BU7LipWC9zf9aL-wotM85yMf2_Y8SoU5tePnBeE_ID === undefined ? 'VISPER-MD&i4xlgIBT#Rzf0BU7LipWC9zf9aL-wotM85yMf2_Y8SoU5tePnBeE' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'vispermd' : process.env.SESSION_NAME, 

};

