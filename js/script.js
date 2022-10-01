// Slider
const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
const imgContainer = document.querySelector(".aspect-ratio-169");
const dotItem = document.querySelectorAll(".dot");
let imgNumber = imgPosition.length;
let index = 0;

imgPosition.forEach(function(image,index) {
    image.style.left = index*100 + "%"
    dotItem[index].addEventListener("click",function(){
        slider (index)
    })
});


function imgSlide () {
    index++;
    if (index >= imgNumber){
        index = 0;
    };
    slider (index)
};

function slider (index) {
    imgContainer.style.left = "-" +index*100+ "%"

    const dotActive = document.querySelector(".active")
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
};
setInterval(imgSlide,4000);


// cuộn header và cuộn Backtop
const goTopBtn = document.querySelector(".go-top-btn");

window.addEventListener("scroll",function(){
    if (window.scrollY > 800){
        goTopBtn.classList.add("gooUtline");
    }else {
        goTopBtn.classList.remove("gooUtline");
    };
});


// nút trượt
let toggle = document.getElementById('toggle');

toggle.onclick = function(){
    toggle.classList.toggle('toggle_trx');
};