console.log('int ok');
/*
Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/
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

const postsList = document.querySelector('.posts-list');

posts.forEach((item,i,arr) =>{

    const postMetaAuthor = createdElementText ('div','post-meta__author',item['author']['name']);
    
    const postMetaTime = createdElementText ('div','post-meta__time',transformDate (item['created']));

    const postMetaData = createdElementContainer ('div','post-meta__data',postMetaAuthor,postMetaTime);

    const profPic = createdElementImg ('img',item['author']['image'],'profile-pic',item['author']['name']);

    const postMetaIcon = createdElementContainer ('div','post-meta__icon',profPic);

    const postMeta = createdElementContainer ('div','post-meta',postMetaIcon,postMetaData);

    const postHeader = createdElementContainer ('div','post__header',postMeta);

    const postText = createdElementText ('div','post__text',item['content']);

    const imagePic = createdElementImg ('img',item['media'],'','');

    const postImage = createdElementContainer ('div','post__image',imagePic);

    const likeButtonIcon = createdElementText ('i','like-button__icon fas fa-thumbs-up','');
    likeButtonIcon.setAttribute('aria-hidden','true')

    const likeButttonLabel = createdElementText ('span','like-button__label','Mi Piace');

    const likeButton = createdElementContainer ('a','like-button  js-like-button',likeButtonIcon,likeButttonLabel);
    likeButton.setAttribute('href','##');
    likeButton.setAttribute('data-postid',item['id']);

    const likesCounter = document.createElement('div');
    likesCounter.className +=('likes__counter');
    likesCounter.innerHTML = (`Piace a <b id="like-counter-${item['id']}" class="js-likes-counter">${item['likes']}</b> persone`); //like-counter-${i} //80
    console.log(item['likes'])
    likeButton.addEventListener('click',
        () => {
            const jsLikesCounter = document.getElementById(`like-counter-${item['id']}`);

            if(likeButton.classList.contains('like-button--liked')){
                likeButton.classList.remove('like-button--liked');
                item['likes']--;
                console.log(item['likes']);
                jsLikesCounter.innerHTML = (item['likes']);

            }
            else{
                likeButton.classList.add('like-button--liked');
                item['likes']++;
                console.log(item['likes'])
                jsLikesCounter.innerHTML = (item['likes']);
            }
        }
    )


    const likesCta = createdElementContainer ('div','likes__cta',likeButton);

    const likes = createdElementContainer ('div','likes js-likes',likesCta,likesCounter);

    const postFooter = createdElementContainer ('div','post__footer',likes);

    const newPost = createdElementContainer ('div','post',postHeader,postText,postImage,postFooter);

    postsList.append(newPost);
    
})














/*
Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/


//function 
// const postId = document.querySelector("[data-postid='1']"); //.dataset.postid
// console.log(postId);  // output: "1"
// postId.addEventListener('click'
//     ()=>{
//         if(likeButton.)
// })



function transformDate (dateId){
    const originalDate = dateId;
    const date = new Date(originalDate);
    const formattedDate = date.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
    });
    //console.log(formattedDate);
    return formattedDate
}



// FUNZIONE PER ELEMENTI TEXT
function createdElementText (elementType,elementClass,contenentText){
    const newElement = document.createElement(elementType);
    newElement.className +=(elementClass);
    newElement.innerText =(contenentText);
    //console.log(newElement);
    return newElement;
}

// FUNZIONE PER ELEMENTI IMG
function createdElementImg (elementType,contenentSrc,elementClass,contenentSrc2){
    if(contenentSrc == null){
        const newElement = document.createElement('span');
        newElement.className +=('profile-pic-default');
        const fullName = (contenentSrc2);
        const nameArray = fullName.split(" ");
        let firstInitial = nameArray[0][0];
        let lastInitial = nameArray[1][0];
        let initials = firstInitial + lastInitial;
        //console.log(initials); 
        newElement.innerText = initials;
        // newElement.style.backgroundColor= 'red';
        return newElement;
    }
    else{
        const newElement = document.createElement(elementType);
        newElement.setAttribute('src',contenentSrc);
        newElement.setAttribute('alt',contenentSrc2);
        newElement.className +=(elementClass);
        // newElement.innerText =(contenentText);
        //console.log(newElement);
        
        return newElement;
    }
    
}

// FUNZIONE PER ELEMENTI CONTENITORI
function createdElementContainer (elementType,elementClass,...contenentElement){
    const newElement = document.createElement(elementType);
    newElement.className +=(elementClass);
    contenentElement.forEach((item)=>{
        newElement.append(item);
        //console.log(newElement);
    })
    return newElement;
}