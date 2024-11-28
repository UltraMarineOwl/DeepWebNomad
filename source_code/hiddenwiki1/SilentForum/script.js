// script.js

document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts');
    const newPostForm = document.getElementById('newPostForm');

    // Добавление нового сообщения
    newPostForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const postText = document.getElementById('postText').value.trim();
        const postAuthor = document.getElementById('postAuthor').value.trim() || 'Аноним';

        if (postText) {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <p class="post-text">${postText}</p>
                <p class="post-author">- ${postAuthor}</p>
            `;

            postsContainer.prepend(postElement); // Новое сообщение добавляется наверх
            newPostForm.reset();
        }
    });
});
