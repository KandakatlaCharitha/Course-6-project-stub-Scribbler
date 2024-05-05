document.addEventListener("DOMContentLoaded", function() {
    // Extract URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const author = decodeURIComponent(urlParams.get('author'));
    const title = decodeURIComponent(urlParams.get('title'));
    const postText = decodeURIComponent(urlParams.get('postText'));

    // Populate elements with extracted information
    document.getElementById('postTitle').textContent = title;
    document.getElementById('author').textContent = ` ${author}`;
    document.getElementById('postContent').textContent = postText;

   
});

document.addEventListener('DOMContentLoaded', function () {
    const editButton = document.getElementById('editButton');
    const saveButton = document.getElementById('saveButton');

    editButton.addEventListener('click', function () {
        const postTitle = document.getElementById('postTitle');
        const postContent = document.getElementById('postContent');
        
        // Add pink border and make editable
        postTitle.contentEditable = true;
        postTitle.style.border = '2px solid pink';
        
        postContent.contentEditable = true;
        postContent.style.border = '2px solid pink';

        // Toggle button visibility
        editButton.style.display = 'none';
        saveButton.style.display = 'inline-block';
    });

    saveButton.addEventListener('click', function () {
        // alert("updated");
        const postTitle = document.getElementById('postTitle');
        const postContent = document.getElementById('postContent');

        // Remove pink border and make not editable
        postTitle.contentEditable = false;
        postTitle.style.border = 'none';
        
        postContent.contentEditable = false;
        postContent.style.border = 'none';

        // Toggle button visibility
        editButton.style.display = 'inline-block';
        saveButton.style.display = 'none';

      
    });
});

// Like button functionality
let likeCount = 0;
const likeButton = document.getElementById("likeButton");
const likeMessage = document.getElementById("likeMessage");

likeButton.addEventListener("click", () => {
    likeCount++;
    if (likeCount === 1) {
        likeMessage.innerText = "1 person likes this!";
    } else {
        likeMessage.innerText = likeCount + " people like this!";
    }
    likeButton.innerText = "Liked!";
    likeButton.disabled = true;
});

// Comment button functionality
const commentInput = document.getElementById("commentInput");
const commentButton = document.getElementById("commentButton");
const allComments = document.getElementById("allComments");

commentButton.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
        const comment = document.createElement("div");
        comment.classList.add("comment");
        comment.innerText = commentText;
        allComments.insertBefore(comment, allComments.firstChild);
        commentInput.value = "";
    }
});