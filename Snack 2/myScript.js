// [Snack 2]
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine. (modificato) 

var zucchine =
    [
        {
            tipo: 'Zucchino nero di Milano',
            peso: 0.5,
            lunghezza: 15
        },
        {
            tipo: 'Zucchino ortolano di Faenza',
            peso: 0.5,
            lunghezza: 17
        },
        {
            tipo: 'Zucchina lunga fiorentina',
            peso: 0.7,
            lunghezza: 30
        },
        {
            tipo: 'Zucchino siciliano',
            peso: 0.9,
            lunghezza: 15
        }, 
        {
            tipo: 'Zucchina striata di Napoli',
            peso: 0.5,
            lunghezza: 14
        },
        {
            tipo: 'Zucchina bianca triestina',
            peso: 0.4,
            lunghezza: 10
        },
        {
            tipo: 'Zucchino tondo di Piacenza',
            peso: 0.4,
            lunghezza: 9
        },
        {
            tipo: 'Zucchino tondo di Nizza',
            peso: 0.2,
            lunghezza: 8
        },
        {
            tipo: 'Zucchina trombetta di Albenga',
            peso: 0.6,
            lunghezza: 12
        },
        {
            tipo: 'Zucchina Crookneck',
            peso: 0.8,
            lunghezza: 19
        }

    ];


var arrayZucchineGrandi = [];
var arrayZucchinePiccole = [];
var arrayZucchineMedie = [];
var pesoZucchineGrandi=0;
var pesoZucchinePiccole=0;
var pesoZucchineMedie=0;

for (var i = 0; i < zucchine.length; i++) 
{
    if (zucchine[i].lunghezza > 15) {
        arrayZucchineGrandi.push(zucchine[i]);
        pesoZucchineGrandi+=zucchine[i].peso;
    } else if (zucchine[i].lunghezza < 15) {
        arrayZucchinePiccole.push(zucchine[i]);
        pesoZucchinePiccole+=zucchine[i].peso;
    }
    else{
        arrayZucchineMedie.push(zucchine[i]);
        pesoZucchineMedie+=zucchine[i].peso;
    }
}
console.log("ZUCCHINE MEDIE");
console.log(arrayZucchineMedie);
console.log("PESO TOTALE: " + pesoZucchineMedie+ " Kg");

console.log("ZUCCHINE GRANDI");
console.log(arrayZucchineGrandi);
console.log("PESO TOTALE: " + pesoZucchineGrandi+ " Kg");

console.log("ZUCCHINE PICCOLE");
console.log(arrayZucchinePiccole);
console.log("PESO TOTALE: " + pesoZucchinePiccole + " Kg");
