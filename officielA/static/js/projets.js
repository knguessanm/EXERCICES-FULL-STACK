// Toggle between map view and list view
document.getElementById('map-view').addEventListener('click', function() {
    document.getElementById('map-container').classList.add('map-view');
    document.getElementById('map-container').classList.remove('hidden');
    document.getElementById('list-container').classList.add('hidden');
    document.getElementById('list-container').classList.remove('list-view');
});

document.getElementById('list-view').addEventListener('click', function() {
    document.getElementById('list-container').classList.add('list-view');
    document.getElementById('list-container').classList.remove('hidden');
    document.getElementById('map-container').classList.add('hidden');
    document.getElementById('map-container').classList.remove('map-view');
});

// Example functions for sharing and commenting
function shareOnSocialMedia(mediaUrl) {
    alert('Partager ' + mediaUrl + ' sur les réseaux sociaux.');
}

function commentOnMedia(mediaUrl) {
    alert('Commenter sur ' + mediaUrl + '.');
}