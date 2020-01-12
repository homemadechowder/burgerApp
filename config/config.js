require('dotenv').config();
module.exports = {

  "development": {
    "username": MYSQL_USER,
    "password": MYSQL_KEY,
    "database": MYSQL_DBNAME,
    "host": MYSQL_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "dialect": "mysql",
    
    "use_env_variable": "JAWSDB_URL"
  }
}

