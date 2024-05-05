function deletepost(element) {
    // Get the parent post card element
    var postCard = element.closest('.post-card');
    
    // Show the delete modal
    var modal = document.getElementById('modal-del');
    modal.style.display = 'block';

    // Handle click on "Yes" button in the modal
    var yesButton = document.getElementById('yesbtn');
    yesButton.onclick = function() {
        // Delete the post card
        postCard.remove();
        // Close the modal
        modal.style.display = 'none';
    }

    // Handle click on "No" button in the modal
    var noButton = document.getElementById('nobtn');
    noButton.onclick = function() {
        // Close the modal
        modal.style.display = 'none';
    }
}

function redirectToBlog(element) {
    // Find the parent post-card element
    const postCard = element.closest('.post-card');

    // Extract author name, title, and post text
    const author = postCard.querySelector('.post-user p').textContent;
    const title = postCard.querySelector('.post-heading').textContent;
    const postText = postCard.querySelector('.post-text').textContent;

    // Encode special characters in the parameters
    const encodedAuthor = encodeURIComponent(author);
    const encodedTitle = encodeURIComponent(title);
    const encodedPostText = encodeURIComponent(postText);

    // Construct the URL with parameters
    const url = `post.html?author=${encodedAuthor}&title=${encodedTitle}&postText=${encodedPostText}`;

    // Open the URL in a new tab
    window.open(url, '_blank');
}
