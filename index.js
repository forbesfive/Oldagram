const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        alt: "Portrait of Vincent van Gogh",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        alt: "Gustave Courbet looking wide eyed and clutching his hair",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        alt: "Joseph Ducreux wearing a hat points at the camera",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
        {
        name: "Rembrandt van Rijn",
        username: "rr1606",
        location: "Leiden , Holland",
        avatar: "images/avatar-rembrandt.jpg",
        post: "images/post-rembrandt.jpg",
        alt: "rembrandt sitting",
        comment: "not bad for a millers son!",
        likes: 74
    }
]

const postSectionEl = document.getElementById("post-section")

for (let i = posts.length - 1; i >= 0; i--){ //Reverse order of post

    let postContent = posts[i] 
    let newPost = document.createElement("article")

    newPost.innerHTML = `
                        <img class="avatar-img post-avatar-img" src="${postContent.avatar}" alt="post avater">
                        <p class="bold-text">${postContent.name}</p>
                        <p>${postContent.location}</p>
                        <img id="post${i}" class="post-img" src="${postContent.post}" alt="${postContent.alt}">
                        <img ID="heart${i}-icon-img" class="icon-img" src="images/icon-heart.png">
                        <img class="icon-img" src="images/icon-comment.png">
                        <img class="icon-img" src="images/icon-dm.png">
                        <div class="post-text-container">
                            <p id="post${i}-likes" class="likes-text bold-text">${postContent.likes} likes</p>
                            <p class="post-text"><span class=" bold-text">${postContent.username} </span>${postContent.comment}</p>
                        </div>
        `
        
    postSectionEl.append(newPost)
}

const elementsArray = document.querySelectorAll(".post-img");

for (let i = 0; i< elementsArray.length; i++) { //
    const postImgEl = document.getElementById(`post${i}`)
    const postNLikes = document.getElementById(`post${i}-likes`)
    const heartNIconImg = document.getElementById(`heart${i}-icon-img`)
    
    let likesId = posts[i]
    let likesCount = likesId.likes
    
    heartNIconImg.addEventListener("click", function() {
        likesCount  += 1
        posts[i].likes = likesCount
        postNLikes.innerHTML = `${posts[i].likes} likes`
    })
    
    postImgEl.addEventListener("dblclick", function() {
        likesCount  += 1
        posts[i].likes = likesCount
        postNLikes.innerHTML = `${posts[i].likes} likes`
    })
}