var indexValue = 1;
showImg(indexValue);

function btn_slide(e) {
    showImg(indexValue = e)
}

function side_slide(e) {
    showImg(indexValue += e)
}

function showImg(e){
    var i;
    const img = document.querySelectorAll('img')

    const sliders = document.querySelectorAll('.btn-slider span')

    if(e > img.length){
        indexValue = 1
    }

    if (e < 1) {
       indexValue = img.length 
    }

    for (let i = 0; i < img.length; i++) {
        img[i].style.display = "none";   
    }

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.background= "rgba(225, 225, 225, 0.1)";  
    }

    img[indexValue-1].style.display = "block"
    sliders[indexValue-1].style.background = "white"
}