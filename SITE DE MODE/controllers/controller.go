package controllers

import (
	"net/http"
	"text/template"
)

// AccueilHandler gère les requêtes à la page d'accueil
func AccueilHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "accueil", nil)
}

// AchatHandler gère les requêtes à la page d'achat
func AchatHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "achat", nil)
}

// BlogHandler gère les requêtes à la page de blog
func BlogHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "blog", nil)
}

// CatalogueHandler gère les requêtes à la page du catalogue
func CatalogueHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "catalogue", nil)
}

// ContactHandler gère les requêtes à la page de contact
func ContactHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "contact", nil)
}

// EquipeHandler gère les requêtes à la page de l'équipe
func EquipeHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "equipe", nil)
}

// FaqHandler gère les requêtes à la page des FAQ
func FaqHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "faq", nil)
}

// InfoHandler gère les requêtes à la page d'information
func InfoHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "info", nil)
}

// ServicesHandler gère les requêtes à la page des services
func ServicesHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "services", nil)
}

// TemoignageHandler gère les requêtes à la page des témoignages
func TemoignageHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "temoignage", nil)
}

// renderTemplate est une fonction utilitaire pour rendre un template HTML
func renderTemplate(w http.ResponseWriter, tmpl string, data interface{}) {
	// Parse les fichiers de template: base, header, footer et le template spécifique
	tpl, err := template.ParseFiles("views/base.html", "views/header.html", "views/footer.html", "views/"+tmpl+".html")
	if err != nil {
		// En cas d'erreur, renvoie une erreur interne du serveur
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	// Exécute le template "base" avec les données fournies
	tpl.ExecuteTemplate(w, "base", data)
}
