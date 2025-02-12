const express = require("express");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index")

const setupAndStartServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api', ApiRoutes)

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
        if(process.env.SYNC_DB) {
            db.sequelize.sync({alter: true});
        }
  });
};

setupAndStartServer();
