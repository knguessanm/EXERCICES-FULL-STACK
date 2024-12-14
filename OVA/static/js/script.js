
//script js , est l'ensemble des ccodes js de toutes les pages html
// début code js de la page accueil.html

document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');

    // Exemple de données d'actualité
    const newsData = [
        { title: 'Nouvelle 1', content: 'Description de la nouvelle 1.' },
        { title: 'Nouvelle 2', content: 'Description de la nouvelle 2.' },
        { title: 'Nouvelle 3', content: 'Description de la nouvelle 3.' }
    ];

    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
        newsContainer.appendChild(newsItem);
    });
});
// fin du code js de la page accueil.html

//début code js de la page actualites-blog.html
function toggleComments(commentSectionId) {
    const commentsSection = document.getElementById(commentSectionId);
    if (commentsSection.style.display === "none" || commentsSection.style.display === "") {
        commentsSection.style.display = "block";
    } else {
        commentsSection.style.display = "none";
    }
}

function addComment(event, commentSectionId) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.name.value.trim();
    const commentText = form.comment.value.trim();

    if (name && commentText) {
        const commentSection = document.getElementById(commentSectionId);
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<p><strong>${name}</strong> : ${commentText}</p>`;
        commentSection.insertBefore(newComment, form);

        form.reset();
    }
}
// fin du code js de la page actualites-blog.html

// debut du code js de la page comment-aider.html
document.addEventListener('DOMContentLoaded', () => {
    const stripe = Stripe('your-publishable-key-here');
    const elements = stripe.elements();

    const style = {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4"
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        }
    };

    const card = elements.create('card', { style: style });
    card.mount('#payment-details');

    const form = document.getElementById('donation-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const { token, error } = await stripe.createToken(card);
        if (error) {
            console.error(error);
        } else {
            const hiddenInput = document.createElement('input');
            hiddenInput.setAttribute('type', 'hidden');
            hiddenInput.setAttribute('name', 'stripeToken');
            hiddenInput.setAttribute('value', token.id);
            form.appendChild(hiddenInput);
            form.submit();
        }
    });
});
// fin du code js de la page comment-aider.html

// debut du code js de la page contact.html
// Leaflet map initialization
document.addEventListener('DOMContentLoaded', () => {
    var map = L.map('map').setView([48.8566, 2.3522], 13); // Coordonées de Paris

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([48.8566, 2.3522]).addTo(map)
        .bindPopup('Siège de l\'ONG')
        .openPopup();
});
// fin du code js de la page contact.html

// debut du code js de la page evenements.html
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar-container');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Plantation d\'arbres',
                start: '2024-07-01',
                url: 'https://www.example.com/register?event=tree-planting'
            },
            {
                title: 'Distribution de nourriture',
                start: '2024-07-10',
                url: 'https://www.example.com/register?event=food-distribution'
            },
            {
                title: 'Collecte de fonds',
                start: '2024-07-20',
                url: 'https://www.example.com/tickets?event=fundraising'
            }
        ],
        eventClick: function(info) {
            info.jsEvent.preventDefault(); // Empêche l'ouverture du lien dans une nouvelle fenêtre
            if (info.event.url) {
                window.open(info.event.url);
            }
        }
    });
    calendar.render();
});
// fin du code js de la evenements.html

//debut du code js de la page nos-projets.html
 
document.addEventListener('DOMContentLoaded', () => {
    // Initialisation de la carte Leaflet
    const map = L.map('map-container').setView([0, 0], 2); // Coordonnées initiales et niveau de zoom

    // Ajouter une couche de tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Exemple de marqueurs pour les projets
    const projects = [
        {
            name: "Projet 1",
            coords: [48.8566, 2.3522], // Paris
            description: "Description du projet 1",
            link: "#project1"
        },
        {
            name: "Projet 2",
            coords: [34.0522, -118.2437], // Los Angeles
            description: "Description du projet 2",
            link: "#project2"
        }
    ];

    // Ajouter les marqueurs sur la carte
    projects.forEach(project => {
        const marker = L.marker(project.coords).addTo(map);
        marker.bindPopup(`<b>${project.name}</b><br>${project.description}<br><a href="${project.link}">En savoir plus</a>`);
    });
});
// fin du code js de la page nos-projets

// début du code js de la page qui-sommes-nous.html
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        timelineItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('in-view');
            } else {
                item.classList.remove('in-view');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
// fin du code js de la page qui-sommes-nous.html