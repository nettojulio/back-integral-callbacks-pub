const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const listagem = frutas.map((x, i) =>  x = `${i} - ${x[0].toUpperCase() + x.slice(1).toLowerCase()};`
);

console.log(listagem);