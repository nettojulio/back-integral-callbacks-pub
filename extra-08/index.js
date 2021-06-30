const nomes = ['Maria', 'João', 'José', 'Antonio', 'Beatriz', 'Camila', "amanda"];

const newList = nomes.filter(x => {
    if (x[0][0] === "A" || x[0][0] === "a") {
        return x;
    }
});

console.log(newList);