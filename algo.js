

const trololo = [10, 7, -3, 4.5, -1.3, 579];
const goal = 0;

const output = trololo.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
// En utilisant la fonction reduce, on parcourt toutes les valeurs du tableau counts, de gauche à droite. Les 2 paramètres de counts : prev et counts.
// Prev parcourt chaque élément du tableau.
// curr est la valeur de départ pour le reducer. 
// La fonction Math.abs retourne la valeur absolue d'un nombre.
// le code qui commence à partir de la flèche signifie que si la valeur renvoyée avec (curr et goal) reste inférieure à la valeur de (prev et goal), la fonction renverra la valeur la plus proche de 0. Autrement dit, -1,3.
console.log(output);