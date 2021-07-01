const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33];


let newList2 = [];


const newList = notas.forEach(x => {
    const encontrado = newList2.find(y => {
        return y === x;
    });
    if (!encontrado) {
        newList2.push(x);
    }
});

console.log(newList2);