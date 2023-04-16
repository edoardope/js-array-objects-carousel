const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


let currentItem = 0;
let currentTitle = 0;
let currentText = 0;
const itemElement = document.querySelector('.item');
const titleElement = document.querySelector('#title');
const textElement = document.querySelector('.description');

itemElement.innerHTML = `<img src="${images[currentItem].image}" alt="">`;
titleElement.innerHTML = `${images[currentTitle].title}`;
textElement.innerHTML = `${images[currentText].text}`;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function() {
  currentItem = (currentItem - 1 + images.length) % images.length;
  currentTitle = (currentTitle - 1 + images.length) % images.length;
  currentText = (currentText - 1 + images.length) % images.length;
  itemElement.innerHTML = `<img src="${images[currentItem].image}" alt="">`;
  titleElement.innerHTML = `${images[currentTitle].title}`;
  textElement.innerHTML = `${images[currentText].text}`;

  let activeItems = document.querySelector('.items.selected');
  let itemsToActive = activeItems.previousElementSibling;
  
  if ( activeItems.classList.contains('first') ) {
    itemsToActive = document.querySelector('.items.last');
  }
  
  activeItems.classList.remove('selected');
  itemsToActive.classList.add('selected');
  
});

next.addEventListener('click', function() {
  currentItem = (currentItem + 1) % images.length;
  currentTitle = (currentTitle + 1) % images.length;
  currentText = (currentText + 1) % images.length;
  itemElement.innerHTML = `<img src="${images[currentItem].image}" alt="">`;
  titleElement.innerHTML = `${images[currentTitle].title}`;
  textElement.innerHTML = `${images[currentText].text}`;

  let activeItems = document.querySelector('.items.selected');
  let itemsToActive = activeItems.nextElementSibling;
  
  if ( activeItems.classList.contains('last') ) {
    itemsToActive = document.querySelector('.items.first');
  }
  
  activeItems.classList.remove('selected');
  itemsToActive.classList.add('selected');
  
});



