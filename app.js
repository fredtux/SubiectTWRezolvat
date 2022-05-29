const express = require('express');

const app = express();



app.use(express.json());
app.use(express.static(__dirname + '/.'));

app.post("/p4", (req, res) => {
    let orase = [{ nume: "Aa", populatie: 14000, capitala: true }, { nume: "Bb", populatie: 7000, capitala: false }, { nume: "Cc", populatie: 19000, capitala: false }, { nume: "Dd", populatie: 5000, capitala: false }, { nume: "Ee", populatie: 8000, capitala: true }, { nume: "Ff", populatie: 12000, capitala: false }, { nume: "Gg", populatie: 20000, capitala: true }];

    let capitala = req.body.capitala == 1;
    let dimensiune = req.body.dimensiune;

    let result = orase.filter((item) => {
        if (item.capitala != capitala)
            return false;

        if (dimensiune == 0) {
            return item.populatie < 10000;
        } else {
            return item.populatie > 10000;
        }
    });

    let list = [];
    for (r of result) {
        list.push(r.nume);
    }

    res.send(JSON.stringify(list));

    // res.send(200);
});

app.listen(3000, () => { console.log('Running 3000!'); });