const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});
const app = express();
const route = express.Router();
const port = 3000;

console.clear();


db.serialize(() => {
    function query(query) {
        return new Promise((resolve, reject) => {
            let type;
            if (query.startsWith('CREATE TABLE')) type = 'RUN';
            if (query.startsWith('INSERT INTO')) type = 'RUN';
            if (query.startsWith('UPDATE')) type = 'RUN';
            if (query.startsWith('DELETE')) type = 'RUN';
            if (query.startsWith('SELECT')) type = 'ALL';

            function logger(err) {
                console.log(err);
            }

            if (type == 'RUN') {
                db.run(query, function(err, result, row)  {
                    if (err) {
                        logger(err);
                        return reject(err);
                    }
                    resolve(result);
                });
            } else if (type == 'ALL') {
                db.all(query, (err, result, row) => {
                    if (err) {
                        logger(err);
                        return reject(err);
                    }
                    resolve(result);
                });
            } else if (type == 'GET') {
                db.get(query, (err, result, row) => {
                    if (err) {
                        logger(err);
                        return reject(err);
                    }
                    resolve(result);
                });
            }

        })
    }

    globalThis.database = query;
});

function inserirRota(rota, funcao) {
    route.post('/api' + rota, (req, res) => {
        function resposta(response) {
            res.json(response)
        }
        funcao(req.body, resposta);
    })
}

globalThis.inserirRota = inserirRota;

app.use(cors());
app.use(express.json());
require('./api/routes');
app.use(route);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
