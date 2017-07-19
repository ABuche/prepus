# Anti-Plagiat
## Analyseur de plagiat à l'intention des enseignants de GEGI de l'Université de Sherbrooke
#### Projet de 6ieme session

Ce directory est seulement la base afin d'avoir un seul _repository_. On tente de limiter le nombre de fichier dans celui-ci. Vous êtes invités à contribuer dans les sous-dossiers.
Chaque pull request doit être revu par un membre d'équipe **n'ayant pas participé au développement en revue** ainsi que le par le _product owner_ avant d'être accepté.

Pour qu'un pull request soit accepté, il faut avoir ajouté les tests nécessaires à vos ajouts et que tous les tests passes (voir les sections _tests_ des éléments plus bas)

# Table des matières
-----------------
1. [Front-end](#Front-end)
1. [Elasticsearch](#Elasticsearch)

Membres de l'équipe:
- Austin-Didier Tran (_Product owner_)
- Raphaël Drouin (_Scrum master_)
- Émile Arseneault
- Oliver Bellavance
- Alexandre Buche
- Anne-Marie Desloges
- ~~Vincent Bougie~~ **RIP**

# Front-end
Le front end utilise React-Redux. Plus particulièrement on utilise [un boilerplate de Davezuko](https://github.com/davezuko/react-redux-starter-kit/tree/v2.0.0-alpha.1 "v2.0.0-alpha.1").
## Prérequis
* node `^4.2.0`
* npm `^3.0.0`

## Utilisation
Pour faire du developement, commencer par installer les modules de node necessaire et ensuite il suffit de démarrer le serveur:
```shell
$ cd front-end
$ npm install       #Vous avez le temps de vous faire un café, c'est long la première fois
$ npm start         #Démarre le serveur en devlopement sur localhost:5000
```

Pour compiler le serveur dans le dossier .dist on utilise `npm run compile`. Attention, cette commande, comme toutes les autres, utilise l'environnement par défaut qui est dev. Ainsi, pour compiler pour l'environnement de production, on utilise `NODE_END=production npm run compile`.
Pour exécuter le linting et les tests, et sur leur succès, compiler, on éxécute `NODE_END=production npm run deploy`.

# Elasticsearch
Le contenu des documents est storé dans [elasticsearch v 5.4](https://www.elastic.co/guide/en/elastic-stack/5.4/index.html).
Elastic est installé sur la vm de même que Kibana qui est un outil web pour visionner et modifier les paramètres d'Elastic. Kibana n'est pas necessaire dans un context de production mais, aide à débugger.
## Prérequis
* elastic `^5.4.0`
* ingest-attachment pour elastic (voir plus bas)
* kibana `^5.4.0`

## ingest-attachment
Pour que le pipeline en charge d'extraire les données du pdf fonctionne, il faut avoir installer le plugin ingest-attachment . Pour ce faire, `sudo bin/elasticsearch-plugin install ingest-attachment` dans le répertoire d'installation d'elastic.
## Démarrage
Il faut démarrer Elastic et ensuite Kibana, dans cet ordre. Pour linux:
```shell
$ ./bin/elasticsearch          # $ES_HOME: répertoire d'installation
$ ./bin/kibana                 # $KIBANA_HOME: répertoire d'installation
```
Pour d'autre os, voir la [documentation](https://www.elastic.co/guide/en/elastic-stack/5.4/installing-elastic-stack.html)

# Back-end
L'IDE utilisé est IntelliJ. C'est facultatif mais les procédures spécifiées plus bas explique uniquement pour cet IDE, si vous en utilisez un autre, ajoutez les procédure au Readme.

## Tests
Dans IntelliJ, faire clique droit sur le dossier src/test/java/com et appuyer sur `run test`.

# Base de données
On utilise postgres comme base de données. Le schéma a été généré à l'aide de
Power Designer. 
---
In the words of Abraham Lincoln:
> You can't always trust a quote of a famous one on Internet
