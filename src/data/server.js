import express from "express";
import mssql from "mssql";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/blogs", (req, res) => {
  const config = {
    server: "localhost",
    database: "blog",
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
  };
  mssql.connect(config, (err) => {
    let request = new mssql.Request();

    request.query("select * from BlogEntries", (err, records) => {
      if (err) console.log(err);
      else res.send(records);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
});
