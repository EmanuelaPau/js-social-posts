// BONUS
// Formattare le date in formato italiano (gg/mm/aaaa)
// Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postListElement = document.getElementById('container');

let numberOfLikes = [];

posts.forEach((element, i) => {
    let unformattedDate = element.created.toString();
    let europeanFormatDate = `${unformattedDate.substring(8, 10)}/${unformattedDate.substring(5, 7)}/${unformattedDate.substring(0, 4)}`

    const { name, image } = element.author;
    // console.log(name, image);

    let nameFirstLetters = name.split(' ');
    nameFirstLetters = nameFirstLetters.map(word => word.charAt(0))
    nameFirstLetters = nameFirstLetters.join('');
    // console.log(nameFirstLetters)

    const todayDate = new Date().getTime();
    let postDate = new Date(`${unformattedDate.substring(5, 7)} ${unformattedDate.substring(8, 10)}, ${unformattedDate.substring(0, 4)}`).getTime();
    let howMuchMillisecondsFromPostDate = todayDate - postDate;

    function convertMsToTime(milliseconds) {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        let weeks = Math.floor(days / 7);
        let months = Math.floor(days / 30);

        return months;
    }

    numberOfLikes.push(element.likes);

    if (image === null) {

        postListElement.innerHTML += ` 
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <div class="profile-pic-default">
                        <span>${nameFirstLetters}</span>                                     
                    </div>                 
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${name}</div>
                    <div class="post-meta__time">${convertMsToTime(howMuchMillisecondsFromPostDate)} mesi fa</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.content}</div>
        <div class="post__image">
            <img src="${element.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button js-like-button" href="#${element.id}" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
        `
    } else {

        postListElement.innerHTML += ` 
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${image}" alt="${name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${convertMsToTime(howMuchMillisecondsFromPostDate)} mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src="${element.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" href="#${element.id}" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
    }


})

console.log(numberOfLikes);

const likeButton = document.querySelectorAll('.like-button');

const likeCounterElement = document.querySelectorAll('.js-likes-counter')

let likedPosts = [];

posts.forEach((element, i) => {
    // console.log(element, i)
    clickLikeButtonBehavior(i);
})

function clickLikeButtonBehavior(buttonNumber) {
    likeButton[buttonNumber].addEventListener('click', function () {

        likeButton[buttonNumber].classList.toggle('like-button--liked');

        if (likeButton[buttonNumber].classList.contains('like-button--liked')) {
            // numberOfLikes[1]--;
            likeCounterElement[buttonNumber].innerHTML = numberOfLikes[buttonNumber] + 1;

            likedPosts.push(posts[buttonNumber].id);
            console.log(likedPosts);
        } else {
            // numberOfLikes[1]++;

            likeCounterElement[buttonNumber].innerHTML = numberOfLikes[buttonNumber];
            likedPosts.pop(posts[buttonNumber].id);
            console.log(likedPosts);
        }
    })
}