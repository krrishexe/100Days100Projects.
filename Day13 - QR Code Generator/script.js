function generateQRCode(){
    let website = document.getElementById('website').value;
    if(website){
        let qrCodeImage = document.getElementById('qrcode');
        qrCodeImage.innerHTML = "";
        new QRCode(qrCodeImage,website);
        

        let container = document.getElementById('qrcode-container')
        container.style.display = "block";
    }
    else{
        alert("Please Enter a Valid URL");
    }
}