function replacename() {
    let name = prompt("masukkan user name anda.!","");
    document.getElementById("name").innerHTML=name
}

replacename();

function formvalidation(){
    
}

document.getElementById('formulir').addEventListener('submit',function(Event){
    Event.preventDefault();

    const now = new Date();
    const dateTimeString = now.toLocaleDateString();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const tgllahir = document.getElementById('tgllahir').value;
    const jeniskelamin = document.querySelector('input[nama="jeniskelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    const resulttext = 'date/time: ${datetimestring}\n \nNama: ${nama}\n Email: ${email}\n Tanggal Lahir: ${tgllahir}\n pesan: ${pesan}\n'.value;

    document.getElementById('result').value = resulttext;


    alert('Pesan terkirim');
    document.getElementById('nama').value ="";
    document.getElementById('tgllahir').value ="";
    document.getElementById('pesan').value ="";

});


let currentSlide = 0;
function moveSlide(direction){
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides').length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const offset = -currentSlide *100;
    slides.computedStyleMap.transform = 'tranlateX(${offset}%';
}

