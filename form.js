// Open the reply popup
function openReplyPopup(commentId) {
    document.getElementById(`${commentId}-popup`).style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
}

// Close the reply popup
function closeReplyPopup(commentId) {
    document.getElementById(`${commentId}-popup`).style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Submit reply
function submitReply(event, commentId) {
    event.preventDefault(); // Prevent the form from reloading the page
    
    const replyText = document.querySelector(`#${commentId}-form textarea`).value;
    if (replyText) {
        // Create a new reply element
        const newReply = document.createElement('div');
        newReply.classList.add('reply-item');
        newReply.innerHTML = `
            <div class="user">
                <div class="user-image"><img src="images/neo.png" alt=""></div>
                <div class="user-meta">
                    <div class="name">User 2</div>
                    <div class="day">Just now</div>
                </div>
            </div>
            <div class="comment">${replyText}</div>
        `;

        // Append the new reply to the replies section
        document.getElementById(`${commentId}-replies`).appendChild(newReply);

        // Close the popup and clear the form
        closeReplyPopup(commentId);
        document.querySelector(`#${commentId}-form textarea`).value = '';
    }
}
// Function to handle new comment submission
function submitNewComment(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    
    // Get the comment text from the form
    const commentText = document.querySelector('.comment-box textarea').value;
    
    // Only proceed if the comment text is not empty
    if (commentText.trim()) {
        // Create a new unique ID for the new comment (optional: you can use a timestamp or other unique identifiers)
        const newCommentId = `comment-${Date.now()}`;

        // Create a new comment div
        const newComment = document.createElement('div');
        newComment.classList.add('comment-list');
        newComment.id = newCommentId;  // Set the new comment ID

        // HTML structure for the new comment
        newComment.innerHTML = `
            <div class="flex">
                <div class="user">
                    <div class="user-image"><img src="images/neo.png" alt=""></div>
                    <div class="user-meta">
                        <div class="name">User</div>
                        <div class="day">Just now</div>
                    </div>
                </div>
                <div class="reply">
                    <div class="click icon"><i class="fa-regular fa-circle-up"></i></div>
                    <div class="click icon"><i class="fa-regular fa-circle-down"></i></div>
                    <div class="re-comment" onclick="openReplyPopup('${newCommentId}')">Comments</div>
                </div>
            </div>
            <div class="comment">${commentText}</div>

            <!-- Replies Section for the new comment -->
            <div class="replies" id="${newCommentId}-replies"></div>

            <!-- Reply Popup for the new comment -->
            <div class="comments-popup" id="${newCommentId}-popup">
                <span class="close-comments-btn" onclick="closeReplyPopup('${newCommentId}')">×</span>
                <div class="comments-content">
                    <h2>Reply to Comment</h2>
                    <form id="${newCommentId}-form" onsubmit="submitReply(event, '${newCommentId}')">
                        <textarea placeholder="Write your reply..." required></textarea>
                        <button type="submit">Reply</button>
                    </form>
                </div>
            </div>
            <div class="overlay" id="overlay"></div>
        `;

        // Append the new comment to the comments section
        document.getElementById('comment-session').appendChild(newComment);
        
        // Reset the form after posting the comment
        document.querySelector('.comment-box textarea').value = '';
    }
}
function submitReply(event, parentCommentId) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Get the reply text from the form
    const replyText = document.querySelector(`#${parentCommentId}-popup textarea`).value;

    // Only proceed if the reply text is not empty
    if (replyText.trim()) {
        // Create a new reply div
        const newReply = document.createElement('div');
        newReply.classList.add('reply-item'); // Add a class for replies (optional for styling)

        // HTML structure for the reply, including upvote and downvote
        newReply.innerHTML = `
            <div class="flex">
                <div class="user">
                    <div class="user-image"><img src="images/neo.png" alt=""></div>
                    <div class="user-meta">
                        <div class="name">User</div>
                        <div class="day">Just now</div>
                    </div>
                </div>
                <div class="reply">
                    <div class="click icon"><i class="fa-regular fa-circle-up"></i></div>
                    <div class="click icon"><i class="fa-regular fa-circle-down"></i></div>
                </div>
            </div>
            <div class="comment">${replyText}</div>
        `;

        // Append the new reply to the replies section of the parent comment
        document.getElementById(`${parentCommentId}-replies`).appendChild(newReply);

        // Reset the reply form after posting the reply
        document.querySelector(`#${parentCommentId}-popup textarea`).value = '';

        // Close the reply popup
        closeReplyPopup(parentCommentId);
    }
    
}

