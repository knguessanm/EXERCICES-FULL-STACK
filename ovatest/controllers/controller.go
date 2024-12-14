package controllers

import (
	"net/http"
	"text/template"
)

// AccueilHandler gère les requêtes à la page d'accueil
func AccueilHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "accueil", nil)
}

// AproposHandler gère les requêtes à la page d'achat
func AproposHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "a-propos", nil)
}

// ActualitesBlogHandler gère les requêtes à la page de blog
func ActualitesblogHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "actualites-blog", nil)
}

// commentaiderHandler gère les requêtes à la page du catalogue
func CommentaiderHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "comment-aider", nil)
}

// ContactHandler gère les requêtes à la page de contact
func ContactHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "contact", nil)
}

// EvenementsHandler gère les requêtes à la page de l'équipe
func EvenementsHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "evenements", nil)
}

// NosprojetsHandler gère les requêtes à la page des FAQ
func NosprojetsHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "nos-projets", nil)
}

// RapportstransparenceHandler gère les requêtes à la page d'information
func RapportstransparenceHandler(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "rapports-transparence", nil)
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