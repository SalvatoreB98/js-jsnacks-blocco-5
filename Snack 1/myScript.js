// [Snack 1]
// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
// peso e lunghezza. Calcola quanto pesano tutte le zucchine.

zucchine =
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
        }, {
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

    ]
console.log("Calcolo del peso:");
var pesoTot = 0;
for(var i = 0; i<zucchine.length; i++){
    pesoTot += zucchine[i].peso;
}
console.log("Il peso totale è di: " + pesoTot.toFixed(2));