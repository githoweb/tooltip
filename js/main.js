var target = document.getElementById('myTooltipTest');
var tooltipIsActive = 0;

// TODO : create a seperate function to build tooltip dom "createTooltipDom"
// TODO : create a seperate function to build tooltip dom "createTooltipDom"
// Idée : Faire une fonction qui gère un état true/false réutilisable ?

function tooltipActive(){

    if( tooltipIsActive == 0 ){
        createTooltipDom()
        tooltipIsActive = 1;
    }
}

function tooltipInactive(){

    if( tooltipIsActive == 1 ){
        var tooltipContainer = document.getElementsByClassName('tooltip')[0];
        document.body.removeChild(tooltipContainer);
        tooltipIsActive = 0;
    }
}

function createTooltipDom(){
    var tooltipContainer = document.createElement('div');
    var tooltipCssClass = tooltipContainer.setAttribute('class', 'tooltip');
    tooltipContainer.innerHTML = 'Mon texte';
    document.getElementsByTagName('body')[0].appendChild(tooltipContainer);
}


target.addEventListener('mouseover', tooltipActive);
target.addEventListener('mouseout', tooltipInactive);
