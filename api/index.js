const express = require('express');
const mysql = require('mysql');

const api = express();
//a chaque envoie d'un résultat , autorise l'accessibilité des routes de n'importe quelle origine
api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
})
//api.METHOD(PATH, HANDLER);
// api est une instance d’express.
// METHOD est une méthode de demande HTTP. (GET, POST, PUT, DELETE, etc...)
// PATH est un chemin sur le serveur.
// HANDLER est la fonction exécutée lorsque la route est reconnue:  côté réception (Request) ou côté émission (Response).

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "amazon",
  password: "soleil"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MYSQL connected ..");
});

api.get('/', (req, res) => {
  res.send('ok, good');
});

api.get('/articles', (req, res) => {
  connection.query('SELECT * FROM articles',(err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(connection);
  });
});
//fonctionnalité de filtre des prix asc/desc -> filtrage des él par le back
// api.get('/articles/filter?', (req, res) => {
//   console.log(req.query)
//   if(req.query.price) {
//     if(req.query.price === "asc") {
//       connection.query('SELECT * FROM articles ORDER BY price ASC',(err, result) => {
//         if (err) throw err;
//         res.send(result);
//       });
//     } else if(req.query.price === "desc") {
//       connection.query('SELECT * FROM articles ORDER BY price DESC',(err, result) => {
//         if (err) throw err;
//         res.send(result);
//       });
//     } else {
//       res.sendStatus(400);
//     }
//   } else {
//     res.sendStatus(400);
//   }
// });

api.listen(8000,(err) => {
  if(err) throw err;
  console.log('API running ...');
})
