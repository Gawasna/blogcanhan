document.addEventListener('DOMContentLoaded', () => {
    const newPostButton = document.getElementById('new-post-button');
    const newPostModal = document.getElementById('new-post-modal');
    const closeButton = document.querySelector('.close-button');
    const newPostForm = document.getElementById('new-post-form');
    const postsContainer = document.getElementById('posts');

    // Open modal
    newPostButton.addEventListener('click', () => {
        newPostModal.style.display = 'block';
    });

    // Close modal
    closeButton.addEventListener('click', () => {
        newPostModal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === newPostModal) {
            newPostModal.style.display = 'none';
        }
    });

    // Add new post
    newPostForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
            <button class="delete-button"><i class="fas fa-trash"></i> Delete</button>
        `;

        // Add delete functionality
        post.querySelector('.delete-button').addEventListener('click', () => {
            post.remove();
        });

        postsContainer.appendChild(post);

        // Reset form and close modal
        newPostForm.reset();
        newPostModal.style.display = 'none';
    });
});
