// ANIMATION MOVEMENT LAYERS
const container = document.querySelector(".container");
const card = document.querySelector(".card");

// ITEMS
const title = document.querySelector(".title");
const sneaker = document.querySelector(".imgBox img");
const purchase = document.querySelector(".purchase button");
const sizes = document.querySelector(".sizes");
const description = document.querySelector(".infoBox h3");

// MOVINF ANIMATION EVENT
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// ANIMATE IN
    container.addEventListener("mouseenter", (e) =>{
        card.style.transition = "none";
        // POPOUT
        title.style.transform = "translateZ(150px)";
        sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
        description.style.transform = "translateZ(125px)";
        sizes.style.transform = "translateZ(100px)";
        purchase.style.transform = "translateZ(75px)";
    });


// ANIMATE OUT
container.addEventListener("mouseleave", (e) =>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // POPBACK
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});