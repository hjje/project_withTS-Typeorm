require("dotenv").config();

import { createApp } from "./app";
import { DataSource } from "typeorm"

  const app = createApp()
  const PORT = process.env.PORT
const AppDataSource = new DataSource(
  {
  
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "Qwer!234",
    database: "icecreamDB",
})

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
