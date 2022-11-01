let skinsBar = document.getElementById('skins-bar');
let skins = [
    'assets/img/car1.png',
    'assets/img/car2.png',
    'assets/img/car3.png',
    'assets/img/car4.png',
];
let carSkin = document.getElementById('car-img');
let car = document.getElementById('car');


document.getElementById('carColors').onclick = (e)=>{
    skinsBar.classList.toggle('show');
};
skinsBar.onclick = (e) => {
    console.log(e)
    if(e.target.id === 'skin1'){
        carSkin.setAttribute('src',skins[0]);
    }
    else if(e.target.id === 'skin2'){
        carSkin.setAttribute('src',skins[1]);
    }
    else if(e.target.id === 'skin3'){
        carSkin.setAttribute('src',skins[2]);
    }
    else if(e.target.id === 'skin4'){
        carSkin.setAttribute('src',skins[3]);
    }
}
console.log(window.innerWidth)
let posX = carSkin.clientLeft + 80
document.getElementById('forward').onclick = () => {
    if(posX < window.innerWidth - 128){
    posX += 50
    car.style.left = posX+'px'}
};
document.getElementById('back').onclick = () => {
    if(posX > 0){
    posX -= 50;
    car.style.left = posX +'px'}
};

let rotate = false;
console.log(rotate)
document.getElementById('rotate').onclick = () =>{
    if ( rotate === true) {
        car.style.transform = 'scale(1)';
        rotate = false;
    }
    else {
        car.style.transform = 'scale(-1,1)'
        rotate = true;
    }
}

let light = false;
document.getElementById('light').onclick = () =>{
    if (light === false) {
        document.getElementById('Stoplight').style.display = 'flex';
        document.getElementById('carLight').style.display = 'flex';
        light = true
    }
    else {
        document.getElementById('Stoplight').style.display = 'none';
        document.getElementById('carLight').style.display = 'none';
        light = false;
    }
};

