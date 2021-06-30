const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];


const newListA = pessoas.filter(x => {
    if (x.profissao === "Programador" && x.idade > 20) {
        return x;
    }
});


const newListB = pessoas.filter(x => {
    if (x.profissao === "Jornalista" && x.idade > 30) {
        return x;
    }
});


const newListC = pessoas.filter(x => {
    if (x.idade < 30) {
        if (x.profissao === "Jornalista" || x.profissao === "Programador") {
            return x;
        }
    }
});

console.log(newListA);
console.log(newListB);
console.log(newListC);