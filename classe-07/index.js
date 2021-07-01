const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

const fs = require('fs');

const imputar = "Estou aprendendo JavaScript na Cubos Academy";

fs.writeFile("./meuarquivo.txt", imputar, err => {
    if (!err) {
        fs.readFile("./meuarquivo.txt", (err, data) => {
            if (!err) {
                console.log(data.toString());
            }
        });
    }
});