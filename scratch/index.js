var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    fs.readFile('./textarea.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(8000);

//Avant de commencer l'installation du serveur, j'ai d'abord cré un dossier qui s'appelle scratch qui contiendra 2 fichiers: indexed.js et textarea.html.
//Le index.js contient le code du coté backend. Tandis que le textarea.html contient le code source de la page HTML du site.
//Pour commencer, j'ai installé les modules fs et http. Pourquoi ?
// Le module fs sert à créer un "passage" pour mettre en place le serveur. Sur fs.readFile, il va lire un fichier 'textarea.html' , et l'exposer sur le serveur. Son contenu peut afficher soit le code source de la page, soit le résultat que le code devrait donner.
// le module html sert à confirmer l'extension du code que le serveur va afficher.

// Tout d'abord, on crée une fonction onRequest qui contiendra 2 paramètres: request et response.
// Dans le code au-dessus, j'ai mis en place le if avec else. En traduction, si dans un premier temps, la fonction fs.readFile indique une erreur, sur la page d'affichage, il affichera  File not found et le 404 qui signifie que le client(l'utilisateur) demande une ressource qui n'existe pas.
// Dans un dernier temps, si le code n'affiche aucune erreur, il pourra afficher le code source du HTML sous forme de données.
// Enfin, le serveur va être mis sur le serveur 8000, pour le http.createServer(onRequest).listen(8000);
