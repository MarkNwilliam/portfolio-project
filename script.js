document.getElementById('submit-recommendation').addEventListener('click', function() {
    const recommendationText = document.getElementById('new-recommendation').value;
    const recommenderName = document.getElementById('recommender-name').value;

    if (recommendationText.trim() === "" || recommenderName.trim() === "") {
        alert("Please enter both a recommendation and your name.");
        return;
    }

    // Create new recommendation card
    const recommendationList = document.getElementById('recommendation-list');
    const newCard = document.createElement('div');
    newCard.className = 'recommendation-card';
    newCard.innerHTML = `
        <p>"${recommendationText}"</p>
        <cite>- ${recommenderName}</cite>
    `;

    // Add to existing list
    recommendationList.appendChild(newCard);

    // Clear inputs
    document.getElementById('new-recommendation').value = "";
    document.getElementById('recommender-name').value = "";

    // Show popup
    showPopup();
});

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

document.getElementById('close-popup').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
});

// Close popup when clicking outside content
window.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
