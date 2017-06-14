pagina3_1();
pagina3_2();
pagina3_3();
pagina3_4();
right_arrow();
left_arrow();

function pagina3_1 () {
    document.getElementById("box3_1").style.transform = "translateX(0px)";
    document.getElementById("box3_1").style.opacity = 1;
}

function pagina3_2 () {
    document.getElementById("box3_2").style.opacity = 1;
}

function pagina3_3 () {
    document.getElementById("box3_3").style.transform = "translateX(0px)";
    document.getElementById("box3_3").style.opacity = 1;
}

function pagina3_4 () {
    document.getElementById("box3_4").style.transform = "translateY(0px)";
    document.getElementById("box3_4").style.opacity = 1;
}

function right_arrow () {
    document.getElementById("right_arrw_3").style.opacity = 0.4;
}

function left_arrow () {
    document.getElementById("left_arrw_3").style.opacity = 0.4;
}