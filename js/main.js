var targets = [];
var tooltipHolder = document.getElementsByTagName('body')[0];
var tooltipIsActive = 0;

// TODO : create a seperate function to build tooltip dom "createTooltipDom"
// TODO : create a seperate function to build tooltip dom "createTooltipDom"
// Idée : Faire une fonction qui gère un état true/false réutilisable ?

function getTooltipTargets(attribute){

  var searchedElements = [];
  var allElements = document.getElementsByTagName('*');
  var allElementsCount = allElements.length;

  for (var i = 0; i < allElementsCount; i++)
  {
    if (allElements[i].getAttribute(attribute) !== null) {
      console.log('found data-attribute');
      searchedElements.push(allElements[i]);
    }
  }
  targets = searchedElements;
  return searchedElements;
}


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
    tooltipHolder.appendChild(tooltipContainer);
}

getTooltipTargets('data-tooltip');

for (var i = 0; i < targets.length; i++){
  targets[i].addEventListener('mouseover', tooltipActive);
  targets[i].addEventListener('mouseout', tooltipInactive);
  console.log(targets[i]);
}


//console.log(getTooltipTargets('data-tooltip'));
