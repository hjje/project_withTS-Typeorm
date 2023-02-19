require("dotenv").config();

import { createApp } from "./app";
import { appDataSource } from "./src/models/data-source";

export const setServer = async() => {
  const app = createApp();
  const PORT = process.env.PORT;

  appDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch(() => {
    console.log("Error: Data Source initialization has been failed");
  });

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });

};

setServer();