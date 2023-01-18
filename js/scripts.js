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
const newPostMetaAuthor = createdElementText ('div','post-meta_author','Phil Mangione');
console.log('newPostMetaAuthor',newPostMetaAuthor, typeof newPostMetaAuthor);

const newPostMetaTime = createdElementText ('div','post-time','2021-06-25');
console.log('newPostMetaTime',newPostMetaTime, typeof newPostMetaTime);

const newPostMetaData = createdElementContainer ('div','post-meta__data',newPostMetaAuthor,newPostMetaTime)
console.log('newPostMetaData',newPostMetaData, typeof newPostMetaData);

const provaA = document.querySelector(".post-meta");
provaA.append(newPostMetaData);

function createdElementText (elementType,elementClass,contenentText){
    const newElement = document.createElement(elementType);
    newElement.classList.add(elementClass);
    newElement.innerText =(contenentText);
    console.log(newElement);
    return newElement;
}
function createdElementContainer (elementType,elementClass,...contenentElement){
    const newElement = document.createElement(elementType);
    newElement.classList.add(elementClass);
    newElement.innerText +=(contenentElement);
    console.log(newElement);
    return newElement;
}