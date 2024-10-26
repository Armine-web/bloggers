document.addEventListener("DOMContentLoaded", () => {
    const postContainer = document.querySelector('.post-cards');
    const bloggerList = document.querySelector('.blogger-list');

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');
        postCard.innerHTML = `
        <div class="post-header">
            <h3>${post.title}</h3>  
            <p><strong>Author: ${post.authorName}</strong></p>
        </div>
        <div class="post-content">
            <img class="post-content-img" src="${post.img}" alt="${post.title}">
            <p>${post.story}</p>
        </div>   
        `;
        postContainer.appendChild(postCard);
    });

    bloggers.forEach(blogger => {
        const bloggerItem = document.createElement('li');
        bloggerItem.innerHTML = `
            <img src="${blogger.avatar}" alt="${blogger.firstName} ${blogger.lastName}" class="avatar">
            <span><strong>${blogger.firstName} ${blogger.lastName}</strong></span>
        `;
        bloggerList.appendChild(bloggerItem);
    });

});
