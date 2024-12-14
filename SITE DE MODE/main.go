package main

import (
	"fmt"
	"net/http"
	"tp/controllers"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter() // Crée un nouveau routeur mux

	// Définir les routes et associer chaque route à un gestionnaire spécifique
	router.HandleFunc("/", controllers.AccueilHandler).Methods("GET") // Route pour l'accueil, méthode GET
	router.HandleFunc("/achat", controllers.AchatHandler)             // Route pour achat
	router.HandleFunc("/blog", controllers.BlogHandler)               // Route pour blog
	router.HandleFunc("/catalogue", controllers.CatalogueHandler)     // Route pour catalogue
	router.HandleFunc("/contact", controllers.ContactHandler)         // Route pour contact
	router.HandleFunc("/equipe", controllers.EquipeHandler)           // Route pour équipe
	router.HandleFunc("/faq", controllers.FaqHandler)                 // Route pour FAQ
	router.HandleFunc("/info", controllers.InfoHandler)               // Route pour info
	router.HandleFunc("/services", controllers.ServicesHandler)       // Route pour services
	router.HandleFunc("/temoignage", controllers.TemoignageHandler)   // Route pour témoignage

	// Gestion des fichiers statiques (CSS, JS, images, etc.)
	router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

	// Affiche l'URL de base du serveur
	fmt.Println("http://localhost:8181")

	// Démarre le serveur sur le port 8181 avec le routeur défini
	http.ListenAndServe(":8181", router)
}
