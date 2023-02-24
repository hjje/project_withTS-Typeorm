require("dotenv").config();

import { createApp } from "./app";
import { AppDataSource } from "./src/models/data-source";

  const app = createApp()
  const PORT = process.env.PORT

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
    app.listen(PORT, () => {
          console.log(`Listening on Port ${PORT}`)
        });
