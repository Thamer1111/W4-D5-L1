let size = 12;
let text = document.getElementById("text");
function sizeadd() {
    size += 4
    text.style.fontSize = `${size}px`;
}

function sizede() {
    size -= 4
    taxt.style.fontSize = `${size}px`;
}
function textChang() {
    text.innerText="Fahad";
}
function changBack() {
    text.style.backgroundColor = "blue"
}
function colerchag() {
    text.style.color = "green"
}
let divimg = document.getElementById("img-div");
function imgadd(){
    let img = document.createElement("img");
    img.src = "https://images.pexels.com/photos/31829770/pexels-photo-31829770/free-photo-of-solitary-red-tulip-in-lush-green-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    divimg.appendChild(img);
}

function hideimg(){
    divimg.innerText = "";
}

