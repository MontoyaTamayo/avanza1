//Vamos a seleccionar los elementos 
const redColor = document.querySelector(".Red");

const purpleColor = document.querySelector(".Purple");


const orangeColor = document.querySelector(".Orange");

const cartButton = document.getElementById("button");

const itemTag = document.getElementsByTagName("h3")[0];


const imageCard = document.querySelector(".img-container");


const feedbackBtn = document.querySelector(".feedback");




const buttonText = document.querySelector(".button-text");





// Eventos en los botones de colores


redColor.addEventListener("click", function() {

    cartButton.style.backgroundColor = "red";
    buttonText.style.color = "white";
    itemTag.style.backgroundColor = "red";
    itemTag.style.color = "white";
    imageCard.style.backgroundImage = 'url(./img/tree.jpg)';

});

purpleColor.addEventListener("click", function() {

    cartButton.style.backgroundColor = "purple";
    buttonText.style.color = "white";
    itemTag.style.backgroundColor = "purple";
    itemTag.style.color = "white";
    imageCard.style.backgroundImage = 'url(./img/sunset.jpg)';
});

orangeColor.addEventListener("click", function() {

    cartButton.style.backgroundColor = "orange";
    buttonText.style.color = "white";
    itemTag.style.backgroundColor = "orange";
    itemTag.style.color = "white";
    imageCard.style.backgroundImage = 'url(./img/sea.jpg)';
});

//implementar el botón del carrito

const cart = () => {

    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";

}

cartButton.addEventListener("click", cart);

const feedbackFun = () => {

    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};

feedbackBtn.addEventListener("click", feedbackFun);