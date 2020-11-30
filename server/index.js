const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const Sequelize = require("sequelize");
const dbConfig = require("./config/config.json").development;
const Email = require("./models").Email;
const apiRoutes = require('./routes/api');
const errorHandler = require('./middleware/error-handler');

connectToDatabase();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

// global error handler
app.use(errorHandler);
app.get("/", async (req, res) => {
  try {
    const email = await Email.findById(1);
    const response = { message: `Database has been seeded with email ${email.email}.` };
    res.send(response);
  } catch (error) {
    res.status(422).send(error);
  }
});

app.listen(5000, () => console.log("The node.js app is listening on port 5000."));

function connectToDatabase() {
  const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
  
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
      Email.findById(1).then(email => {
        if (!email) {
          console.log("Database is not seeded, will run seeds now...");
          const { exec } = require("child_process");
          try {
            exec("/opt/node_modules/.bin/sequelize db:seed:all", (err, stdout, stderr) => {
              if (err) {
                console.log(err);
                return;
              }
              console.log(stdout);
            });
          } catch (error) {
            console.log("Error while seeding database: ", error);
          }
        } else {
          console.log("Database already seeded.");
        }
      });
    })
    .catch(err => {
      console.log("Unable to connect to the database:", err);
    });
}

/*async function connectToDatabase() {

  try {
    const connection = await mysql.createConnection({ 
      host: dbConfig.host, 
      port: dbConfig.port, 
      user: dbConfig.username, 
      password: dbConfig.password 
    });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\`;`);
    const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
      host: dbConfig.host,
      dialect: dbConfig.dialect,
      operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    });
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
}*/
