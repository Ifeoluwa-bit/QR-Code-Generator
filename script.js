//getting all required element
const container = document.querySelector(".container"),
qrInput = container.querySelector(".form input"),
generateBtn = container.querySelector(".form button"),
qrImg = container.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return; // if the input is empty then return here
    generateBtn.innerText = "Generating QR Code...";
    //getting a qr code of uder entered value using the qr server api and passing the api returned img src to qrImg
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => { //once qr code img loaded
        container.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        container.classList.remove("active");
    }
});