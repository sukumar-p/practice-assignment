var selectingImages = document.getElementsByClassName("class1");
var clickArrowright = document.getElementById("arrowRight");
var clickArrowleft = document.getElementById("arrowLeft");
var finalimage=document.getElementById("firstImage");
var i = 0;

clickArrowright.addEventListener('click', arrowHandler, true)

function arrowHandler(e) {
    console.log(i)

    i = i < selectingImages.length - 1 ? i + 1 : 0; //i+1 after question mark and single condition is enough
var getingAtri = selectingImages[i].getAttribute("src");
finalimage.setAttribute("src", getingAtri);
finalimage.style.width="50%";
finalimage.style.height="400px";


    // i = (i < selectingImages.length) && (i >= 0) ? i : 0;

    // if (i < selectingImages.length) {
    //     var getingAtri = selectingImages[i].getAttribute("src");
    //     document.getElementById("firstImage").setAttribute("src", getingAtri);
    //     i++;
    // }

}

/* var i=selectingImages.length; */

clickArrowleft.addEventListener('click', arrowlefthandler, true)

function arrowlefthandler(e) {
    console.log(i)

    i = i > 0 ? i - 1 : selectingImages.length - 1; 
var getingAtri = selectingImages[i].getAttribute("src");
document.getElementById("firstImage").setAttribute("src", getingAtri);
finalimage.style.width="50%";
finalimage.style.height="400px";
    // i = i > 0 ? i : selectingImages.length - 1;
    // if (i > 0) {
    //     var getingAtri = selectingImages[i].getAttribute("src");
    //     document.getElementById("firstImage").setAttribute("src", getingAtri);
    //     i--;
    // }
}
finalimage.addEventListener('mouseover',mouseMove,true)


function mouseMove(e){
    i = i > 0 ? i - 1 : selectingImages.length - 1; 
    var getingAtri = selectingImages[i].getAttribute("src");
    document.getElementById("firstImage").setAttribute("src", getingAtri);
    finalimage.style.width="50%";
    finalimage.style.height="400px";
}

// finalimage.addEventListener('mouseout',mouseOut,true)


// function mouseOut(e){
//    i=i<selectingImages.length-1 ?i=1:0;
//     var getingAtri = selectingImages[i].getAttribute("src");
//     document.getElementById("firstImage").setAttribute("src", getingAtri);
//     finalimage.style.width="50%";
//     finalimage.style.height="400px";
// }





