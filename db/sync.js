const mysql = require('mysql2/promise');
require('dotenv').config();

const { DB_NAME } = process.env;

(async () => {
  try {
    const statement = `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`;
    const db = await mysql.createConnection(process.env.PORT? `mysql://nocfd75lv5g0utl6:a6ppzo7e49bsavzu@au77784bkjx6ipju.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/txmnv0ir0a6kke1o` : 'mysql://root@127.0.0.1:3306');
    await db.execute(statement);
    console.log(`${DB_NAME} created`);
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }
})();
