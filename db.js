const { Client } = require('pg');
require('dotenv').config();
// Connect to the database
const client = new Client({
    connectionString: "postgres://root:y7C1z3XKuxsZkl4yyBKEolG6E3cm4wle@dpg-cjhjgpj6fquc73ck19p0-a.singapore-postgres.render.com/library_56eu",
    ssl:{
        rejectUnauthorized: false
    }
    
});

client.connect()
    .then(() => console.log('connected to DB!!'))
    .catch(err => console.error('connection error', err));

module.exports = client;
