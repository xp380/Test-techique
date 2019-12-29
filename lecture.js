const array1 = [0, 1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 10));
// expected output: 10


// la fonction reduce: c'est une fonction qui renvoie une valeur sans à modifier le tableau d'origine fourni. Il se calcule de gauche à droite. la fonction Reduce est comme un couteau suisse. On peut utiliser reduce pour les ré-implanter dans différentes fonctions(min, max, legth, map, filter)
// Pour commencer, Reduce prend 2 valeurs comme arguments: accumulator et currentValue.
// accumulator est une fonction qui parcourira chaque élément du tableau. 
// currentValue est la valeur de départ pour le reducer. Il est optionnel. C'est à dire qu'on n'est pas obligé de le mettre.

// Dans le code au-dessus, il y a 2 variables dont une fonction fléchée.
// la fonction reduce d'au dessus a d'abord additionné le 10, puis le 0. De gauche à droite. Le 10 constitue déjà le point de départ pour le calcul.
// Le résultat fourni devrait etre 20.