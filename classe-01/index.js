const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

// forma extensa
const cidadesList = cidades.filter((x) => {
    if (x.length < 9) {
        return true;
    } else {
        return false;
    }
});

// forma enxuta
// const cidadesList = cidades.filter(x => x.length < 9);

console.log(cidadesList);
console.log(cidadesList.join(", "))