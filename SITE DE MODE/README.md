TP 2/
|
|--- controllers/
|    └── controller.go
|
|
|
|--- views/
|    ├── accueil.html
|    ├── achat.html
|    ├── blog.html
|    ├── catalogue.html
|    ├── contact.html
|    ├── equipe.html
|    ├── faq.html
|    ├── info.html
|    ├── services.html
|    └── temoignage.html
|
|
|
|--- static/
|    ├── css/
|    |   └── style.css 
|    |
|    ├── js/
|    |   └── script.js
|    |
|    └── images/
|    |   ├── 




Model (Modèle) :
- Représente la structure des données et contient la logique métier.
- Exemple : Les modèles de données pour les articles de blog, les produits du catalogue, etc.

View (Vue) :
- Représente l'interface utilisateur.
- Exemple : Les fichiers HTML dans le dossier views.

Controller (Contrôleur) :
- Gère les requêtes de l'utilisateur, interagit avec le modèle, et sélectionne la vue appropriée.
- Exemple : Les fonctions dans controllers/controller.go.

Diagramme MVC :

   [User] -> [Controller] -> [Model] -> [View]
                ^                            |
                |----------------------------|
