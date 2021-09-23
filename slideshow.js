'use strict';

const images = [
    { 'id': '1', 'url': './img/unha1.jpeg' },
    { 'id': '2', 'url': './img/unha2.jpeg' },
    { 'id': '3', 'url': './img/unha3.jpeg' },
    { 'id': '4', 'url': './img/unha4.jpeg' },
    { 'id': '5', 'url': './img/unha5.jpeg' },
    { 'id': '6', 'url': './img/unha6.jpeg' },
    { 'id': '7', 'url': './img/unha7.jpeg' },
    { 'id': '8', 'url': './img/unha8.jpeg' },
    { 'id': '9', 'url': './img/unha9.jpeg' },
    { 'id': '10', 'url': './img/unha10.jpeg' },

]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages ( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore( lastItem, items[0] ); 
    items = document.querySelectorAll('.item'); 
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);