let userid = 'postgres';
let password = 'Nabdem124';


const credentialsMain = {
    user: userid,
    host: "localhost",
    database: "postgres",
    password: password,
    port: 5432,
    Connection: 'keep-alive',
  };

  const credentials = {
    user: userid,
    host: "localhost",
    database: "vain_db",
    password: password,
    port: 5432,
    Connection: 'keep-alive',
  };

  module.exports = {credentialsMain, credentials};