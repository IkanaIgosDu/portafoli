var pos=0;

function menu () {
    if (pos == 0){
    document.getElementById("nav").style.marginTop = "130px";
    pos = 1;
    }else if (pos == 1){
    document.getElementById("nav").style.marginTop = "50px";
    pos = 0;
    }
}

function view_block () {
    //Canvi d'estroctura
    document.getElementById("html-css-js").classList.add('apartat2');
    document.getElementById("html-css-js").classList.remove('apartat');
    
    document.getElementById("modelatge").classList.add('apartat2');
    document.getElementById("modelatge").classList.remove('apartat');
    
    document.getElementById("processing").classList.add('apartat2');
    document.getElementById("processing").classList.remove('apartat');
    
    document.getElementById("Unity").classList.add('apartat2');
    document.getElementById("Unity").classList.remove('apartat');
    
    document.getElementById("animacio-3d").classList.add('apartat2');
    document.getElementById("animacio-3d").classList.remove('apartat');
    
    document.getElementById("animacio-2d").classList.add('apartat2');
    document.getElementById("animacio-2d").classList.remove('apartat');
    
    document.getElementById("photoshop").classList.add('apartat2');
    document.getElementById("photoshop").classList.remove('apartat');
    
    document.getElementById("illustrator").classList.add('apartat2');
    document.getElementById("illustrator").classList.remove('apartat');
    
    document.getElementById("escultura").classList.add('apartat2');
    document.getElementById("escultura").classList.remove('apartat');
    
    document.getElementById("illuminacio").classList.add('apartat2');
    document.getElementById("illuminacio").classList.remove('apartat');
    
    document.getElementById("rigging").classList.add('apartat2');
    document.getElementById("rigging").classList.remove('apartat');
    
    document.getElementById("texturitzacio").classList.add('apartat2');
    document.getElementById("texturitzacio").classList.remove('apartat');
    
    document.getElementById("dissenyvideojocs").classList.add('apartat2');
    document.getElementById("dissenyvideojocs").classList.remove('apartat');
    
    // Canvi de textos
    document.getElementById("html-css-js-txt").classList.add('apartat-txt2');
    document.getElementById("html-css-js-txt").classList.remove('apartat-txt');
    
    document.getElementById("modelatge-txt").classList.add('apartat-txt2');
    document.getElementById("modelatge-txt").classList.remove('apartat-txt');
    
    document.getElementById("processing-txt").classList.add('apartat-txt2');
    document.getElementById("processing-txt").classList.remove('apartat-txt');
    
    document.getElementById("Unity-txt").classList.add('apartat-txt2');
    document.getElementById("Unity-txt").classList.remove('apartat-txt');
    
    document.getElementById("animacio-3d-txt").classList.add('apartat-txt2');
    document.getElementById("animacio-3d-txt").classList.remove('apartat-txt');
    
    document.getElementById("animacio-2d-txt").classList.add('apartat-txt2');
    document.getElementById("animacio-2d-txt").classList.remove('apartat-txt');
    
    document.getElementById("photoshop-txt").classList.add('apartat-txt2');
    document.getElementById("photoshop-txt").classList.remove('apartat-txt');
    
    document.getElementById("illustrator-txt").classList.add('apartat-txt2');
    document.getElementById("illustrator-txt").classList.remove('apartat-txt');
    
    document.getElementById("escultura-txt").classList.add('apartat-txt2');
    document.getElementById("escultura-txt").classList.remove('apartat-txt');
    
    document.getElementById("illuminacio-txt").classList.add('apartat-txt2');
    document.getElementById("illuminacio-txt").classList.remove('apartat-txt');
    
    document.getElementById("rigging-txt").classList.add('apartat-txt2');
    document.getElementById("rigging-txt").classList.remove('apartat-txt');
    
    document.getElementById("texturitzacio-txt").classList.add('apartat-txt2');
    document.getElementById("texturitzacio-txt").classList.remove('apartat-txt');
    
    document.getElementById("dissenyvideojocs-txt").classList.add('apartat-txt2');
    document.getElementById("dissenyvideojocs-txt").classList.remove('apartat-txt');
    
}

function view_line () {
    //Canvi d'estroctura
    document.getElementById("html-css-js").classList.add('apartat');
    document.getElementById("html-css-js").classList.remove('apartat2');
    
    document.getElementById("modelatge").classList.add('apartat');
    document.getElementById("modelatge").classList.remove('apartat2');
    
    document.getElementById("processing").classList.add('apartat');
    document.getElementById("processing").classList.remove('apartat2');
    
    document.getElementById("Unity").classList.add('apartat');
    document.getElementById("Unity").classList.remove('apartat2');
    
    document.getElementById("animacio-3d").classList.add('apartat');
    document.getElementById("animacio-3d").classList.remove('apartat2');
    
    document.getElementById("animacio-2d").classList.add('apartat');
    document.getElementById("animacio-2d").classList.remove('apartat2');
    
    document.getElementById("photoshop").classList.add('apartat');
    document.getElementById("photoshop").classList.remove('apartat2');
    
    document.getElementById("illustrator").classList.add('apartat');
    document.getElementById("illustrator").classList.remove('apartat2');
    
    document.getElementById("escultura").classList.add('apartat');
    document.getElementById("escultura").classList.remove('apartat2');
    
    document.getElementById("illuminacio").classList.add('apartat');
    document.getElementById("illuminacio").classList.remove('apartat2');
    
    document.getElementById("rigging").classList.add('apartat');
    document.getElementById("rigging").classList.remove('apartat2');
    
    document.getElementById("texturitzacio").classList.add('apartat');
    document.getElementById("texturitzacio").classList.remove('apartat2');
    
    document.getElementById("dissenyvideojocs").classList.add('apartat');
    document.getElementById("dissenyvideojocs").classList.remove('apartat2');
    
    // Canvi de textos
    document.getElementById("html-css-js-txt").classList.add('apartat-txt');
    document.getElementById("html-css-js-txt").classList.remove('apartat-txt2');
    
    document.getElementById("modelatge-txt").classList.add('apartat-txt');
    document.getElementById("modelatge-txt").classList.remove('apartat-txt2');
    
    document.getElementById("processing-txt").classList.add('apartat-txt');
    document.getElementById("processing-txt").classList.remove('apartat-txt2');
    
    document.getElementById("Unity-txt").classList.add('apartat-txt');
    document.getElementById("Unity-txt").classList.remove('apartat-txt2');
    
    document.getElementById("animacio-3d-txt").classList.add('apartat-txt');
    document.getElementById("animacio-3d-txt").classList.remove('apartat-txt2');
    
    document.getElementById("animacio-2d-txt").classList.add('apartat-txt');
    document.getElementById("animacio-2d-txt").classList.remove('apartat-txt2');
    
    document.getElementById("photoshop-txt").classList.add('apartat-txt');
    document.getElementById("photoshop-txt").classList.remove('apartat-txt2');
    
    document.getElementById("illustrator-txt").classList.add('apartat-txt');
    document.getElementById("illustrator-txt").classList.remove('apartat-txt2');
    
    document.getElementById("escultura-txt").classList.add('apartat-txt');
    document.getElementById("escultura-txt").classList.remove('apartat-txt2');
    
    document.getElementById("illuminacio-txt").classList.add('apartat-txt');
    document.getElementById("illuminacio-txt").classList.remove('apartat-txt2');
    
    document.getElementById("rigging-txt").classList.add('apartat-txt');
    document.getElementById("rigging-txt").classList.remove('apartat-txt2');
    
    document.getElementById("texturitzacio-txt").classList.add('apartat-txt');
    document.getElementById("texturitzacio-txt").classList.remove('apartat-txt2');
    
    document.getElementById("dissenyvideojocs-txt").classList.add('apartat-txt');
    document.getElementById("dissenyvideojocs-txt").classList.remove('apartat-txt2');
}