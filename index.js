const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 2023;
const RouteDpi = require("./Views/DpiRoute");
const RouteAlatTangkap = require("./Views/AlatTangkapRoute");
const RoutePemilik = require("./Views/PemilikRoute");
const RouteKapal = require("./Views/kapalRoute");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(RouteDpi);
app.use(RouteAlatTangkap);
app.use(RoutePemilik);
app.use(RouteKapal);

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
